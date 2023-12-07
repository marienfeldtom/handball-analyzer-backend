import { TeamStatistics } from '@model';

export class TeamStatisticsBuilder {
  private model: TeamStatistics;

  static get new(): TeamStatisticsBuilder {
    return new TeamStatisticsBuilder();
  }

  private constructor() {
    this.model = {
      concededGoals: 1,
      draws: 1,
      gameEvents: {
        Goal: 1,
        SevenMeters: 1,
        Penalty: 1,
        Timeout: 1,
        BlueCard: 1,
        RedCard: 1,
        YellowCard: 1,
      },
      losses: 1,
      sevenMetersGoals: 1,
      wins: 1,
    };
  }

  build(): TeamStatistics {
    return this.model;
  }
}
