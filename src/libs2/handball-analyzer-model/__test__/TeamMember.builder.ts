import { TeamMember, TeamMemberType } from '@model';

export class TeamMemberBuilder {
  private model: TeamMember;

  static get new(): TeamMemberBuilder {
    return new TeamMemberBuilder();
  }

  private constructor() {
    this.model = {
      id: 'id',
      number: '1',
      name: 'name',
      type: TeamMemberType.Player,
    };
  }

  withId(id: string): TeamMemberBuilder {
    this.model.id = id;
    return this;
  }

  withNumber(number: string): TeamMemberBuilder {
    this.model.number = number;
    return this;
  }

  withName(name: string): TeamMemberBuilder {
    this.model.name = name;
    return this;
  }

  build(): TeamMember {
    return this.model;
  }
}
