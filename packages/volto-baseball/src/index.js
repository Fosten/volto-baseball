import '@plone/volto/config';
import { PlayerCardView } from './components/';
import customBlocks from './components/Blocks/customBlocks';
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
      playercard: ['playerinfo', 'seasonstats', 'careerstats', 'slate'],
    },
    blocksConfig: {
      ...config.blocks.blocksConfig,
      ...customBlocks,
    },
  };

  return config;
}
