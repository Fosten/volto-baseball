import PlayerInfoView from '@Fosten/volto-baseball/components/Blocks/PlayerInfo/View';
import PlayerInfoEdit from '@Fosten/volto-baseball/components/Blocks/PlayerInfo/Edit';
import PlayerStatsView from '@Fosten/volto-baseball/components/Blocks/PlayerStats/View';
import PlayerStatsEdit from '@Fosten/volto-baseball/components/Blocks/PlayerStats/Edit';
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
}
export default customBlocks;