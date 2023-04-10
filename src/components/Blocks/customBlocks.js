import PlayerInfoView from '@Fosten/volto-baseball/components/Blocks/PlayerInfo/View';
import PlayerInfoEdit from '@Fosten/volto-baseball/components/Blocks/PlayerInfo/Edit';
import CareerStatsView from '@Fosten/volto-baseball/components/Blocks/CareerStats/View';
import CareerStatsEdit from '@Fosten/volto-baseball/components/Blocks/CareerStats/Edit';
import SeasonStatsView from '@Fosten/volto-baseball/components/Blocks/SeasonStats/View';
import SeasonStatsEdit from '@Fosten/volto-baseball/components/Blocks/SeasonStats/Edit';
import CurrentStandingsView from '@Fosten/volto-baseball/components/Blocks/CurrentStandings/View';
import CurrentStandingsEdit from '@Fosten/volto-baseball/components/Blocks/CurrentStandings/Edit';
import TodayGamesView from '@Fosten/volto-baseball/components/Blocks/TodayGames/View';
import TodayGamesEdit from '@Fosten/volto-baseball/components/Blocks/TodayGames/Edit';
import icon from '@plone/volto/icons/list-bullet.svg';

const customBlocks = {
  playerinfo: {
    id: 'playerinfo',
    title: 'Player Info',
    edit: PlayerInfoEdit,
    view: PlayerInfoView,
    icon: icon,
    group: 'text',
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
  },
  careerstats: {
    id: 'careerstats',
    title: 'Career Stats',
    edit: CareerStatsEdit,
    view: CareerStatsView,
    icon: icon,
    group: 'text',
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
  },
  seasonstats: {
    id: 'seasonstats',
    title: 'Season Stats',
    edit: SeasonStatsEdit,
    view: SeasonStatsView,
    icon: icon,
    group: 'text',
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
  },
  todaygames: {
    id: 'todaygames',
    title: 'Today Games',
    edit: TodayGamesEdit,
    view: TodayGamesView,
    icon: icon,
    group: 'text',
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
  },
  currentstandings: {
    id: 'currentstandings',
    title: 'Current Standings',
    edit: CurrentStandingsEdit,
    view: CurrentStandingsView,
    icon: icon,
    group: 'text',
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
  },
};
export default customBlocks;
