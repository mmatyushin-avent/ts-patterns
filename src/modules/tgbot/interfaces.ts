import { ContextMessageUpdate } from 'telegraf';

export interface IUserSession {
  info: ContextMessageUpdate['from'];
  isRegistrationInitiated: boolean;
  isRegistered: boolean;
  lastInteraction: number;
}

export interface IRegisteredUsers {
  [key: number]: ContextMessageUpdate['from'];
}
