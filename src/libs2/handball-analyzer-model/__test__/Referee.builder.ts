import { Referee } from '@model';

export class RefereeBuilder {
  private model: Referee;

  static get new(): RefereeBuilder {
    return new RefereeBuilder();
  }

  private constructor() {
    this.model = {
      id: 'id',
      name: 'name',
      club: 'club',
    };
  }

  withId(id: string): RefereeBuilder {
    this.model.id = id;
    return this;
  }

  withName(name: string): RefereeBuilder {
    this.model.name = name;
    return this;
  }

  withClub(club: string): RefereeBuilder {
    this.model.club = club;
    return this;
  }

  build(): Referee {
    return this.model;
  }
}
