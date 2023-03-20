import '@plone/volto/config';
import { PlayerCardView } from '@Fosten/volto-baseball/components/';
import customBlocks from '@Fosten/volto-baseball/components/Blocks/customBlocks'
import './theme/main.less';

export default function applyConfig(config) {
  config.views = {
    ...config.views,
    contentTypesViews: {
      ...config.views.contentTypesViews,
      playercard: PlayerCardView,
    },
  };
  config.blocks = {
    ...config.blocks,
    initialBlocks: {
      ...config.blocks.initialBlocks,
      "playercard": [ 'playerinfo', 'playerstats', 'text' ]
    },
    blocksConfig: {
      ...config.blocks.blocksConfig,
      ...customBlocks
    },
  }
  return config;
}
