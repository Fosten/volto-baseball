import '@plone/volto/config';
import { PlayerCardView } from '@Fosten/volto-baseball/components/';
import customBlocks from '@Fosten/volto-baseball/components/Blocks/customBlocks'

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
      "playercard": [ 'playerinfo', 'playerstats', 'text' ]
    },
    blocksConfig: {
      ...config.blocks.blocksConfig,
      ...customBlocks,
      ...config.blocks.initialBlocks,
    },
  }
  return config;
}