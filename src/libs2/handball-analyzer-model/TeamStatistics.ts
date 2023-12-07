import { GameEventType } from './GameEventType';

export type TeamStatistics = {
  gameEvents: Record<GameEventType, number>;
  wins: number;
  losses: number;
  draws: number;
  sevenMetersGoals: number;
  concededGoals: number;
};
