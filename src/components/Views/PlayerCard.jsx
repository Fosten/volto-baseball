import React, { useState } from 'react';
import { Helmet } from '@plone/volto/helpers';
import { Container, Image, Segment } from 'semantic-ui-react';
import { flattenToAppURL } from '@plone/volto/helpers';

const MLBStatsAPI = require('@asbeane/mlb-stats-api');
const mlbStats = new MLBStatsAPI();

const ShowPosts = () => {
  const [response, setPosts] = useState({});
  async function useResponse() {
    try {
      const response = await mlbStats.getPerson({
        pathParams: { personId: 630105 },
      });
      setPosts(response.data);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }
  useResponse();
  
  return (
    <div className="container">
      {response.people?.map((item, i) => {
        return <p key={i}>Full Name: {item.fullName}</p>;
      })}
      {response.people?.map((item, i) => {
        return <p key={i}>Born: {item.birthDate}</p>;
      })}
      {response.people?.map((item, i) => {
        return <p key={i}>Current Age: {item.currentAge}</p>;
      })}
      {response.people?.map((item, i) => {
        return <p key={i}>Height: {item.height}</p>;
      })}
      {response.people?.map((item, i) => {
        return <p key={i}>Weight: {item.weight}</p>;
      })}
      {response.people?.map((item, i) => {
        return <p key={i}>Debut Date: {item.mlbDebutDate}</p>;
      })}
    </div>
  );
};

const ShowPosts2 = () => {
    const [response2, setPosts2] = useState({});
    async function useResponse2() {
      try {
        const response2 = await mlbStats.getPersonSeasonStats({
          pathParams: { personId: 630105, gamePk: '?stats=statsSingleSeason&season=2022' },
        });
        setPosts2(response2.data);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    }
    useResponse2();

    return (
      <div className="container">
        <table border="1">
          <tr>
            <th>AB</th>
            <th>H</th>
            <th>R</th>
            <th>HR</th>
            <th>RBI</th>
            <th>SB</th>
            <th>AVG</th>
            <th>OBP</th>
            <th>SLG</th>
            <th>OPS</th>
          </tr>
          <tr>
        {response2.stats?.map((item, i) => {
          return <td key={i}>{item.splits[i].stat.atBats}</td>;
        })}
        {response2.stats?.map((item, i) => {
          return <td key={i}>{item.splits[i].stat.hits}</td>;
        })}
        {response2.stats?.map((item, i) => {
          return <td key={i}>{item.splits[i].stat.runs}</td>;
        })}
        {response2.stats?.map((item, i) => {
          return <td key={i}>{item.splits[i].stat.homeRuns}</td>;
        })}
        {response2.stats?.map((item, i) => {
          return <td key={i}>{item.splits[i].stat.rbi}</td>;
        })}
        {response2.stats?.map((item, i) => {
          return <td key={i}>{item.splits[i].stat.stolenBases}</td>;
        })}
        {response2.stats?.map((item, i) => {
          return <td key={i}>{item.splits[i].stat.avg}</td>;
        })}
        {response2.stats?.map((item, i) => {
          return <td key={i}>{item.splits[i].stat.obp}</td>;
        })}
        {response2.stats?.map((item, i) => {
          return <td key={i}>{item.splits[i].stat.slg}</td>;
        })}
        {response2.stats?.map((item, i) => {
          return <td key={i}>{item.splits[i].stat.ops}</td>;
        })}
        </tr>
        </table>
      </div>
    );
    };

const PlayerCardView = (props) => {
  const { content } = props;
  return (
    <Container>
      <div id="page-document">
        <Helmet title={content.title} />
        <h1 className="documentFirstHeading">{content.title}</h1>
        <Segment clearing>
          <h2>Player Info</h2>
          <ShowPosts />
          <h2>2022 Stats</h2>
          <ShowPosts2 />
          <hr />
          Everything above this line is auto-generated.
          <Image
            src={flattenToAppURL(content.image?.scales?.preview?.download)}
            size="small"
            floated="right"
            alt={content.image_caption}
            avatar
          />
          <p>Current Team: {content.currentteam}</p>
          <div dangerouslySetInnerHTML={{ __html: content.blurb.data }} />
        </Segment>
      </div>
    </Container>
  );
};

export default PlayerCardView;
