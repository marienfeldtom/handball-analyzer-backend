import { TeamMemberType } from './TeamMemberType';

export type TeamMember = {
  id: string;
  name: string;
  number: string;
  type: TeamMemberType;
};
