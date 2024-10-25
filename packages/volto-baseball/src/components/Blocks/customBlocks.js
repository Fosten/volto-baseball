import PlayerInfoView from '../../components/Blocks/PlayerInfo/View';
import PlayerInfoEdit from '../../components/Blocks/PlayerInfo/Edit';
import CareerStatsView from '../../components/Blocks/CareerStats/View';
import CareerStatsEdit from '../../components/Blocks/CareerStats/Edit';
import SeasonStatsView from '../../components/Blocks/SeasonStats/View';
import SeasonStatsEdit from '../../components/Blocks/SeasonStats/Edit';
import CurrentStandingsView from '../../components/Blocks/CurrentStandings/View';
import CurrentStandingsEdit from '../../components/Blocks/CurrentStandings/Edit';
import TodayGamesView from '../../components/Blocks/TodayGames/View';
import TodayGamesEdit from '../../components/Blocks/TodayGames/Edit';
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
