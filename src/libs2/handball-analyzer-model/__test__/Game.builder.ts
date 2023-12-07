import { Game } from '@model';
import { RefereeBuilder } from './Referee.builder';

export class GameBuilder {
  private model: Game;

  static get new(): GameBuilder {
    return new GameBuilder();
  }

  private constructor() {
    this.model = {
      id: 'id',
      leagueId: 'leagueId',
      homeTeamId: 'homeTeamId',
      awayTeamId: 'awayTeamId',
      winnerTeamId: 'homeTeamId',
      halftimeScore: {
        home: 1,
        away: 1,
      },
      fulltimeScore: {
        home: 2,
        away: 1,
      },
      referees: [
        RefereeBuilder.new.build(),
        RefereeBuilder.new.withId('id2').withName('name2').withClub('club2').build(),
      ],
      date: new Date(),
    };
  }

  withFulltimeScore(fulltimeScore: { home: number; away: number }): GameBuilder {
    this.model.fulltimeScore = fulltimeScore;
    return this;
  }

  build(): Game {
    return this.model;
  }
}
