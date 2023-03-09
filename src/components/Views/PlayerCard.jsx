import React, { useState } from 'react';
import { Helmet } from '@plone/volto/helpers';
import { Container, Image, Segment } from 'semantic-ui-react';
import { flattenToAppURL } from '@plone/volto/helpers';

const MLBStatsAPI = require('@asbeane/mlb-stats-api');
const mlbStats = new MLBStatsAPI();

const ShowPosts = (props) => {
  const { content } = props;
  const [response, setPosts] = useState({});
  async function useResponse() {
    try {
      const response = await mlbStats.getPerson({
        pathParams: { personId: content.playerID },
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
        return <p key={i}>Primary Position: {item.primaryPosition.name}</p>;
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

const ShowPosts2 = (props) => {
  const { content } = props;
  const [response2, setPosts2] = useState({});
  async function useResponse2() {
    try {
      const response2 = await mlbStats.getPerson({
        pathParams: {
          personId: `${content.playerID}/stats?stats=statsSingleSeason&season=2022`,
        },
      });
      setPosts2(response2.data);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }  
  useResponse2();
    const hitpitch = 'hitting';
  console.log(hitpitch);

  if(hitpitch === 'hitting') {
   return (
    <div className="container">
    <h2>2022 Hitting Stats</h2>
    <table border="1">
      <tr>
        <th>Year</th>
        <th>Team</th>
        <th>League</th>
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
          return <td key={i}>{item.splits[i].season}</td>;
        })}
        {response2.stats?.map((item, i) => {
          return <td key={i}>{item.splits[i].team.name}</td>;
        })}
        {response2.stats?.map((item, i) => {
          return <td key={i}>{item.splits[i].league.name}</td>;
        })}
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
  }
  if(hitpitch === 'pitching') {
    return (
      <div className="container">
      <h2>2023 Pitching Stats</h2>
        <table border="1">
          <tr>
            <th>Year</th>
            <th>Team</th>
            <th>League</th>
            <th>GP</th>
            <th>IP</th>
            <th>H</th>
            <th>ER</th>
            <th>BB</th>
            <th>K</th>
            <th>W</th>
            <th>SV</th>
            <th>ERA</th>
            <th>WHIP</th>
          </tr>
          <tr>
            {response2.stats?.map((item, i) => {
              return <td key={i}>{item.splits[i].season}</td>;
            })}
            {response2.stats?.map((item, i) => {
              return <td key={i}>{item.splits[i].team.name}</td>;
            })}
            {response2.stats?.map((item, i) => {
              return <td key={i}>{item.splits[i].league.name}</td>;
            })}
            {response2.stats?.map((item, i) => {
              return <td key={i}>{item.splits[i].stat.gamesPlayed}</td>;
            })}
            {response2.stats?.map((item, i) => {
              return <td key={i}>{item.splits[i].stat.inningsPitched}</td>;
            })}
            {response2.stats?.map((item, i) => {
              return <td key={i}>{item.splits[i].stat.hits}</td>;
            })}
            {response2.stats?.map((item, i) => {
              return <td key={i}>{item.splits[i].stat.earnedRuns}</td>;
            })}
            {response2.stats?.map((item, i) => {
              return <td key={i}>{item.splits[i].stat.baseOnBalls}</td>;
            })}
            {response2.stats?.map((item, i) => {
              return <td key={i}>{item.splits[i].stat.strikeOuts}</td>;
            })}
            {response2.stats?.map((item, i) => {
              return <td key={i}>{item.splits[i].stat.wins}</td>;
            })}
            {response2.stats?.map((item, i) => {
              return <td key={i}>{item.splits[i].stat.saves}</td>;
            })}
            {response2.stats?.map((item, i) => {
              return <td key={i}>{item.splits[i].stat.era}</td>;
            })}
            {response2.stats?.map((item, i) => {
              return <td key={i}>{item.splits[i].stat.whip}</td>;
            })}
          </tr>
        </table>
      </div>      );
   }
   else
    return <div>{hitpitch} = undefined</div>
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
          <ShowPosts {...props} />
          <ShowPosts2 {...props} />
          <hr />
          Everything above this line is auto-generated.
          <Image
            src={flattenToAppURL(content.image?.scales?.preview?.download)}
            size="small"
            floated="right"
            alt={content.image_caption}
            avatar
          />
          <p>Player ID: {content.playerID}</p>
          <div dangerouslySetInnerHTML={{ __html: content.blurb?.data }} />
        </Segment>
      </div>
    </Container>
  );
};

export default PlayerCardView;
