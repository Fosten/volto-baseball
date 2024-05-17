import { Helmet } from '@plone/volto/helpers';
import { Container, Image, Segment } from 'semantic-ui-react';
import { hasBlocksData, flattenToAppURL } from '@plone/volto/helpers';
import RenderBlocks from '@plone/volto/components/theme/View/RenderBlocks';

const PlayerCardView = (props) => {
  const { content } = props;
  return (
    <Container>
      <div id="page-document">
        <Helmet title={content.title} />
        <h1 className="documentFirstHeading">{content.title}</h1>
        <Segment clearing>
          {hasBlocksData(content) ? <RenderBlocks content={content} /> : <div></div>}
          <Image src={flattenToAppURL(content.image?.scales?.preview?.download)} size="small" floated="right" alt={content.image_caption} avatar />
          <p dangerouslySetInnerHTML={{ __html: content.blurb?.data }} />
        </Segment>
      </div>
    </Container>
  );
};

export default PlayerCardView;
