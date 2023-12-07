import { Team } from '@model';
import { TeamMemberBuilder } from './TeamMember.builder';
import { TeamStatisticsBuilder } from './TeamStatistics.builder';

export class TeamBuilder {
  private model: Team;

  static get new(): TeamBuilder {
    return new TeamBuilder();
  }

  private constructor() {
    this.model = {
      id: 'homeTeamId',
      name: 'name',
      shortName: 'shortName',
      teamMembers: [
        TeamMemberBuilder.new.build(),
        TeamMemberBuilder.new.withId('id2').withName('name2').withNumber('2').build(),
      ],
      leagueId: 'leagueId',
      stats: TeamStatisticsBuilder.new.build(),
    };
  }

  withId(id: string): TeamBuilder {
    this.model.id = id;
    return this;
  }

  build(): Team {
    return this.model;
  }
}
