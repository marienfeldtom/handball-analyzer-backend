import { BaseGameEvent } from './BaseGameEvent';
import { GameEventType } from './GameEventType';

export type GameEventBlueCard = BaseGameEvent<GameEventType.BlueCard> & {
  playerId: string;
};
