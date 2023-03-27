import React, { useState, useEffect } from 'react';
import { Table } from 'semantic-ui-react';

/**
 * View description block.
 * @module components/manage/Blocks/Description/View
 */

import PropTypes from 'prop-types';

const MLBStatsAPI = require('@asbeane/mlb-stats-api');
const mlbStats = new MLBStatsAPI();

/**
 * View description block class.
 * @class View
 * @extends Component
 */
const View = (props) => {
  const { content } = props;
  const [response2, setState] = useState({});
  const [hitpitch, setState2] = useState('null');
  const statyears = ["2022", "2021", "2020"];
  for (let statyear of statyears) {
    async function useResponse2() {
    try {
      const response2 = await mlbStats.getPerson({
        pathParams: {
          personId: `${content.playerID}/stats?stats=statsSingleSeason&season=${statyear}`,
        },
      })
        setState(response2.data)
      const hitpitch = response2.data.stats[0].group.displayName
      setState2(hitpitch)
    }
    catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
    }

  useEffect(() => {
    useResponse2();
  }, []);
  }

  const renderthis = () => {
    return ((hitpitch === 'hitting') ?
    (
      <div className="playerstats">
        <Table celled>
          <Table.Header>
            <Table.Row>
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
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
            {response2.stats?.map((item, i) => {
              return <td key={i}>{item.splits[i].season}</td>;
            })}
            {response2.stats?.map((item, i) => {
                if (item.splits[i].numTeams > 1)
                  {
                    return <td key={i}>{item.splits[1].team.name}/{item.splits[2].team.name}</td>
                  }
                  else
                  {
                    return <td key={i}>{item.splits[i].team.name}</td>
                  }
            })}
            {response2.stats?.map((item, i) => {
                if (item.splits[i].numTeams > 1)
                {
                  if (item.splits[1].league.name = "National League")
                  {var league1 = 'NL'}
                  else {var league1 = 'AL'}
                  if (item.splits[2].league.name = "National League")
                  {var league2 = 'NL'}
                  else {var league2 = 'AL'}

                  return <td key={i}>{league1}/{league2}</td>
                }
                else
                {
                  return <td key={i}>{item.splits[i].league.name}</td>
                }
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
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    ) 
    :
    (hitpitch === 'pitching') ? 
    (
      <div className="playerstats">
        <Table celled>
          <Table.Header>
            <Table.Row>
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
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              {response2.stats?.map((item, i) => {
                return <td key={i}>{item.splits[i].season}</td>;
              })}
              {response2.stats?.map((item, i) => {
                  if (item.splits[i].numTeams > 1)
                    {
                      return <td key={i}>{item.splits[1].team.name}/{item.splits[2].team.name}</td>
                    }
                    else
                    {
                      return <td key={i}>{item.splits[i].team.name}</td>
                    }
              })}
              {response2.stats?.map((item, i) => {
                  if (item.splits[i].numTeams > 1)
                  {
                    if (item.splits[1].league.name = "National League")
                    {var league1 = 'NL'}
                    else {var league1 = 'AL'}
                    if (item.splits[2].league.name = "National League")
                    {var league2 = 'NL'}
                    else {var league2 = 'AL'}

                    return <td key={i}>{league1}/{league2}</td>
                  }
                  else
                  {
                    return <td key={i}>{item.splits[i].league.name}</td>
                  }
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
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    )
    :
    (
      <div className="container"></div>
    )
  )
  }

  var yoyo = renderthis();
  return yoyo
};


/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
View.propTypes = {
  properties: PropTypes.objectOf(PropTypes.any),
};

export default View;
