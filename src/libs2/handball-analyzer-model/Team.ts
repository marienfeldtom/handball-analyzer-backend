import { TeamMember } from './TeamMember';
import { TeamStatistics } from './TeamStatistics';

export type Team = {
  id: string;
  leagueId: string;
  name?: string;
  shortName: string;
  teamMembers: TeamMember[];
  stats: TeamStatistics;
};
