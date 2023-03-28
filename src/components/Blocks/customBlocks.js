import PlayerInfoView from '@Fosten/volto-baseball/components/Blocks/PlayerInfo/View';
import PlayerInfoEdit from '@Fosten/volto-baseball/components/Blocks/PlayerInfo/Edit';
import PlayerStatsView from '@Fosten/volto-baseball/components/Blocks/PlayerStats/View';
import PlayerStatsEdit from '@Fosten/volto-baseball/components/Blocks/PlayerStats/Edit';
import SingleSeasonStatsView from '@Fosten/volto-baseball/components/Blocks/SingleSeasonStats/View';
import SingleSeasonStatsEdit from '@Fosten/volto-baseball/components/Blocks/SingleSeasonStats/Edit';
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
  playerstats: {
    id: 'playerstats',
    title: 'Player Stats',
    edit: PlayerStatsEdit,
    view: PlayerStatsView,
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
  singleseasonstats: {
    id: 'singleseasonstats',
    title: 'Single Season Stats',
    edit: SingleSeasonStatsEdit,
    view: SingleSeasonStatsView,
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
    title: 'CurrentStandings',
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
}
export default customBlocks;