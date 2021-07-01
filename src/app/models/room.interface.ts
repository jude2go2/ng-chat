import { IMessage } from './';

export interface IChatRoom {
  id: string;
  roomName: string;
  messages: Array<IMessage>;
  createdUserId: string;
}
