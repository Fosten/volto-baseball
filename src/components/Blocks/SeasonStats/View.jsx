import React, { useState, useEffect } from 'react';
import { Table } from 'semantic-ui-react';

/**
 * View description block.
 * @module components/manage/Blocks/Description/View
 */

import PropTypes from 'prop-types';

const MLBStatsAPI = require('@asbeane/mlb-stats-api');
const mlbStats = new MLBStatsAPI();
const statyear = '2023';
const hitcats = [
  'Year',
  'Team',
  'League',
  'AB',
  'H',
  'R',
  'HR',
  'RBI',
  'SB',
  'AVG',
  'OBP',
  'SLG',
  'OPS',
];
const pitchcats = [
  'Year',
  'Team',
  'League',
  'GP',
  'IP',
  'H',
  'ER',
  'BB',
  'K',
  'W',
  'SV',
  'ERA',
  'WHIP',
];

/**
 * View description block class.
 * @class View
 * @extends Component
 */
const View = (props) => {
  const { content } = props;
  const [response3, setState] = useState({});
  const [hitpitch, setState3] = useState('null');

  async function myResponse3() {
    try {
      const response3 = await mlbStats.getPerson({
        pathParams: {
          personId: `${content.playerID}/stats?stats=statsSingleSeason&season=${statyear}`,
        },
      });
      setState(response3.data);
      const hitpitch = response3.data.stats[0].group.displayName;
      setState3(hitpitch);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }

  useEffect(() => {
    myResponse3();
  }, []);

  const renderthis = () => {
    return hitpitch === 'hitting' ? (
      <div className="seasonstats">
        <h2>2023 Hitting Stats</h2>
        <Table celled>
          <Table.Header>
            <Table.Row>
              {hitcats.map(function (hitcat, index) {
                return <th key={index}>{hitcat}</th>;
              })}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              {response3.stats?.map((item, i) => {
                return <td key={i}>{item.splits[i].season}</td>;
              })}
              {response3.stats?.map((item, i) => {
                if (item.splits[i].numTeams > 1) {
                  return (
                    <td key={i}>
                      {item.splits[1].team.name}/{item.splits[2].team.name}
                    </td>
                  );
                } else {
                  return <td key={i}>{item.splits[i].team.name}</td>;
                }
              })}
              {response3.stats?.map((item, i) => {
                if (item.splits[i].numTeams > 1) {
                  if ((item.splits[1].league.name = 'National League')) {
                    var league1 = 'NL';
                  } else {
                    league1 = 'AL';
                  }
                  if ((item.splits[2].league.name = 'National League')) {
                    var league2 = 'NL';
                  } else {
                    league2 = 'AL';
                  }

                  return (
                    <td key={i}>
                      {league1}/{league2}
                    </td>
                  );
                } else {
                  return <td key={i}>{item.splits[i].league.name}</td>;
                }
              })}
              {response3.stats?.map((item, i) => {
                return <td key={i}>{item.splits[i].stat.atBats}</td>;
              })}
              {response3.stats?.map((item, i) => {
                return <td key={i}>{item.splits[i].stat.hits}</td>;
              })}
              {response3.stats?.map((item, i) => {
                return <td key={i}>{item.splits[i].stat.runs}</td>;
              })}
              {response3.stats?.map((item, i) => {
                return <td key={i}>{item.splits[i].stat.homeRuns}</td>;
              })}
              {response3.stats?.map((item, i) => {
                return <td key={i}>{item.splits[i].stat.rbi}</td>;
              })}
              {response3.stats?.map((item, i) => {
                return <td key={i}>{item.splits[i].stat.stolenBases}</td>;
              })}
              {response3.stats?.map((item, i) => {
                return <td key={i}>{item.splits[i].stat.avg}</td>;
              })}
              {response3.stats?.map((item, i) => {
                return <td key={i}>{item.splits[i].stat.obp}</td>;
              })}
              {response3.stats?.map((item, i) => {
                return <td key={i}>{item.splits[i].stat.slg}</td>;
              })}
              {response3.stats?.map((item, i) => {
                return <td key={i}>{item.splits[i].stat.ops}</td>;
              })}
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    ) : hitpitch === 'pitching' ? (
      <div className="seasonstats">
        <h2>2023 Pitching Stats</h2>
        <Table celled>
          <Table.Header>
            <Table.Row>
              {pitchcats.map(function (pitchcat, index) {
                return <th key={index}>{pitchcat}</th>;
              })}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              {response3.stats?.map((item, i) => {
                return <td key={i}>{item.splits[i].season}</td>;
              })}
              {response3.stats?.map((item, i) => {
                if (item.splits[i].numTeams > 1) {
                  return (
                    <td key={i}>
                      {item.splits[1].team.name}/{item.splits[2].team.name}
                    </td>
                  );
                } else {
                  return <td key={i}>{item.splits[i].team.name}</td>;
                }
              })}
              {response3.stats?.map((item, i) => {
                if (item.splits[i].numTeams > 1) {
                  if ((item.splits[1].league.name = 'National League')) {
                    var league1 = 'NL';
                  } else {
                    league1 = 'AL';
                  }
                  if ((item.splits[2].league.name = 'National League')) {
                    var league2 = 'NL';
                  } else {
                    league2 = 'AL';
                  }

                  return (
                    <td key={i}>
                      {league1}/{league2}
                    </td>
                  );
                } else {
                  return <td key={i}>{item.splits[i].league.name}</td>;
                }
              })}
              {response3.stats?.map((item, i) => {
                return <td key={i}>{item.splits[i].stat.gamesPlayed}</td>;
              })}
              {response3.stats?.map((item, i) => {
                return <td key={i}>{item.splits[i].stat.inningsPitched}</td>;
              })}
              {response3.stats?.map((item, i) => {
                return <td key={i}>{item.splits[i].stat.hits}</td>;
              })}
              {response3.stats?.map((item, i) => {
                return <td key={i}>{item.splits[i].stat.earnedRuns}</td>;
              })}
              {response3.stats?.map((item, i) => {
                return <td key={i}>{item.splits[i].stat.baseOnBalls}</td>;
              })}
              {response3.stats?.map((item, i) => {
                return <td key={i}>{item.splits[i].stat.strikeOuts}</td>;
              })}
              {response3.stats?.map((item, i) => {
                return <td key={i}>{item.splits[i].stat.wins}</td>;
              })}
              {response3.stats?.map((item, i) => {
                return <td key={i}>{item.splits[i].stat.saves}</td>;
              })}
              {response3.stats?.map((item, i) => {
                return <td key={i}>{item.splits[i].stat.era}</td>;
              })}
              {response3.stats?.map((item, i) => {
                return <td key={i}>{item.splits[i].stat.whip}</td>;
              })}
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    ) : (
      <div className="container"></div>
    );
  };

  var yoyo = renderthis();
  return yoyo;
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
