import { ContextMessageUpdate } from 'telegraf';
import * as lodash from 'lodash';
import { IUserSession } from '.';

export class UserSessionRepository {

  protected sessions: { [key: number]: IUserSession } = {};

  public get(id: number): IUserSession {
    return this.sessions[id]
      ? lodash.cloneDeep(this.sessions[id])
      : null;
  }

  public create(user: ContextMessageUpdate['from']): void {
    const { id: userId } = user;

    this.sessions[userId] = {
      info: lodash.clone(user),
      isRegistrationInitiated: false,
      isRegistered: false,
      lastInteraction: null,
    };
  }

  public isExist(id: number): boolean {
    return !!this.sessions[id];
  }

  public setLastInteraction(id: number, timestamp: number): void {
    this.sessions[id].lastInteraction = timestamp;
  }

  public registrationInit(id: number): void {
    this.sessions[id].isRegistrationInitiated = true;
  }

  public registrationComplete(id: number): void {
    this.sessions[id].isRegistrationInitiated = false;
    this.sessions[id].isRegistered = true;
  }

  public isRegistrationInitiated(id: number): boolean {
    return this.isExist(id) && this.sessions[id].isRegistrationInitiated;
  }

  public isRegistered(id: number): boolean {
    return this.isExist(id) && this.sessions[id].isRegistered;
  }

}
