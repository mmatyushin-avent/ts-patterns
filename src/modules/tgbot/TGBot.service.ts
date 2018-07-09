import { Injectable, OnModuleInit } from '@nestjs/common';
import { ContextMessageUpdate } from 'telegraf';
const Markup = require('telegraf/markup'); // tslint:disable-line
const Telegraf = require('telegraf'); // tslint:disable-line
const SocksAgent = require('socks5-https-client/lib/Agent'); // tslint:disable-line

import { UserSessionRepository } from '.';

@Injectable()
export class TGBotService implements OnModuleInit {

  protected usersSessionRepository: UserSessionRepository = new UserSessionRepository();
  protected socksAgent;
  protected bot;

  constructor() {
    const token = process.env.BOT_MANAGER_TEST;
    this.socksAgent = this.createSocksAgent();

    const botOptions = {
      telegram: { agent: this.socksAgent },
    };
    this.bot = this.createBot(token, botOptions);

    if (process.env.BOT_LOGGING_ENABLED) {
      this.bot.use(Telegraf.log());
    }
  }

  protected createSocksAgent() {
    return new SocksAgent({
      socksHost: process.env.TGPROXY_HOST,
      socksPort: process.env.TGPROXY_PORT,
      socksUsername: process.env.TGPROXY_USER,
      socksPassword: process.env.TGPROXY_PASS,
    });
  }

  protected createBot(token: string, options?: any) {
    return new Telegraf(token, options ? options : {});
  }

  public onModuleInit() {
    this.runBot();
  }

  protected runBot() {
    this.bot.use(this.userStateMiddleware.bind(this));

    /** Start command */
    this.bot.start(this.showMainMenu.bind(this));

    /** Registration init */
    this.bot.hears(/^регистрация$/ig, this.registrationInit.bind(this));

    /** Registration complete */
    this.bot.hears(process.env.TG_BOT_AUTH_PASS, this.registrationComplete.bind(this));

    /** Handle any non-targeted message */
    this.bot.on('message', this.handleNonTargetedMessage.bind(this));

    this.bot.startPolling();
  }

  protected userStateMiddleware(ctx: ContextMessageUpdate, next) {
    const { id: userId } = ctx.from;
    const currentTimestamp = (new Date()).getTime();

    if (!this.usersSessionRepository.isExist(userId)) {
      this.usersSessionRepository.create(ctx.from);
    } else {
      this.usersSessionRepository.setLastInteraction(userId, currentTimestamp);
    }

    return next();
  }

  protected showMainMenu(ctx: ContextMessageUpdate) {
    ctx.reply(
      'Выберите действие',
      Markup
        .keyboard(['Регистрация'])
        .oneTime()
        .resize()
        .extra(),
    );
  }

  protected registrationInit(ctx: ContextMessageUpdate) {
    const { id: userId } = ctx.from;

    if (!this.usersSessionRepository.isRegistered(userId)) {
      this.usersSessionRepository.registrationInit(userId);
      ctx.reply('Введите выданный Вам пароль');
    } else {
      ctx.reply('Вы уже зарегистрированы');
    }
  }

  protected registrationComplete(ctx: ContextMessageUpdate) {
    const { id: userId } = ctx.from;

    if (!this.usersSessionRepository.isRegistered(userId)) {
      this.usersSessionRepository.registrationComplete(userId);
      ctx.reply('Вы успешно зарегистрированы');
    } else {
      ctx.reply('Вы уже зарегистрированы');
    }
  }

  protected handleNonTargetedMessage(ctx: ContextMessageUpdate) {
    const { id: userId } = ctx.from;

    if (this.usersSessionRepository.isRegistrationInitiated(userId)) {
      ctx.reply('Неверный пароль');
    } else {
      this.showMainMenu(ctx);
    }
  }

}
