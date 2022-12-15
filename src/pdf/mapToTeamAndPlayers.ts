import { Player, Team } from 'models';

export const mapToTeamAndPlayers = (
  teamDataStrings: string[],
  league: string,
): { teams: Team[]; players: Player[] } => {
  const homeTeamStartIndex = teamDataStrings.findIndex((line) => line.includes('Heim'));
  const homeTeamEndIndex = teamDataStrings.findIndex((line) => line.includes('Gast'));
  const homeTeamStrings = teamDataStrings.slice(homeTeamStartIndex, homeTeamEndIndex);
  const homeTeamString = homeTeamStrings[0];
  const homeRestStrings = homeTeamStrings.slice(12);
  const homePlayerStringsEndIndex = homeRestStrings.findIndex((line) => line.startsWith('A'));
  const homePlayerStrings = homeRestStrings.slice(0, homePlayerStringsEndIndex);
  const homeCoachesEndIndex = homeRestStrings.findIndex((line) => line.startsWith('D'));
  const homeCoachesStrings = homeRestStrings.slice(
    homePlayerStringsEndIndex,
    homeCoachesEndIndex + 1,
  );

  const awayTeamStartIndex = teamDataStrings.findIndex((line) => line.includes('Gast'));
  const awayTeamStrings = teamDataStrings.slice(awayTeamStartIndex);
  const awayTeamString = awayTeamStrings[0];
  const awayRestStrings = awayTeamStrings.slice(12);
  const awayPlayerStringsEndIndex = awayRestStrings.findIndex((line) => line.startsWith('A'));
  const awayPlayerStrings = awayRestStrings.slice(0, awayPlayerStringsEndIndex);
  const awayCoachesEndIndex = awayRestStrings.findIndex((line) => line.startsWith('D'));
  const awayCoachesStrings = awayRestStrings.slice(
    awayPlayerStringsEndIndex,
    awayCoachesEndIndex + 1,
  );

  const homeCoaches = mapToCoaches(homeCoachesStrings);
  const awayCoaches = mapToCoaches(awayCoachesStrings);
  const homeTeam = mapToTeam(homeTeamString, league, homeCoaches);
  const awayTeam = mapToTeam(awayTeamString, league, awayCoaches);
  const homePlayers = mapToManyPlayers(homePlayerStrings, homeTeam.id);
  const awayPlayers = mapToManyPlayers(awayPlayerStrings, awayTeam.id);

  return {
    teams: [homeTeam, awayTeam],
    players: [...homePlayers, ...awayPlayers],
  };
};

const mapToCoaches = (coachesStrings: string[]): string[] =>
  coachesStrings.map((coachString) => coachString.slice(1)).filter((coach) => coach !== '');

const mapToTeam = (teamString: string, league: string, coaches: string[]): Team => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, name] = teamString.split(': ');

  return {
    id: `${league} ${name}`,
    name,
    coaches,
  };
};

const mapToManyPlayers = (playerStrings: string[], teamId: string): Player[] =>
  playerStrings.map((playerString) => mapToPlayer(playerString, teamId));

const mapToPlayer = (playerString: string, teamId: string): Player => {
  const playerNumberRegex = /^\d{1,2}/;
  const playerNameRegex = /[^\d:/]+/;

  const numberMatch = playerString.match(playerNumberRegex);
  const number = numberMatch ? parseInt(numberMatch[0]) : 0;
  const nameMatch = playerString.match(playerNameRegex);
  const name = nameMatch ? nameMatch[0] : 'N/A';

  return {
    id: `${teamId} ${number} ${name}`,
    teamId,
    name,
    number,
  };
};
