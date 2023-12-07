import { GameScore } from './GameScore';
import { Referee } from './Referee';

export type Game = {
  id: string;
  date: Date;
  leagueId: string;
  winnerTeamId: string;
  homeTeamId: string;
  awayTeamId: string;
  halftimeScore: GameScore;
  fulltimeScore: GameScore;
  referees: Referee[];
};

