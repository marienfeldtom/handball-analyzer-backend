import { GameEvent, GameEventType } from '@model';

export class GameEventBuilder {
  private model: GameEvent;

  static get new(): GameEventBuilder {
    return new GameEventBuilder();
  }

  private constructor() {
    this.model = {
      id: 'id',
      type: GameEventType.Goal,
      leagueId: 'leagueId',
      gameId: 'gameId',
      teamId: 'homeTeamId',
      playerId: 'playerId',
      daytime: new Date(),
      elapsedSeconds: 1,
      score: {
        home: 1,
        away: 0,
      },
    };
  }

  withType(type: GameEventType): GameEventBuilder {
    this.model.type = type;
    return this;
  }

  withTeamId(teamId: string): GameEventBuilder {
    this.model.teamId = teamId;
    return this;
  }

  withPlayerId(playerId: string): GameEventBuilder {
    (this.model as any).playerId = playerId;
    return this;
  }

  build(): GameEvent {
    return this.model;
  }
}
