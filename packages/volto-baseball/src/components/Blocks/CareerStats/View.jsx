import React, { useState, useEffect } from 'react';
import { Table } from 'semantic-ui-react';

/**
 * View description block.
 * @module components/manage/Blocks/Description/View
 */

import PropTypes from 'prop-types';

const MLBStatsAPI = require('@asbeane/mlb-stats-api');
const mlbStats = new MLBStatsAPI();
function generateArrayOfYears() {
  var max = 2025;
  var min = max - 20;
  var years = [];

  for (var i = min; i <= max; i++) {
    years.push(i);
  }
  return years;
}
const statyears = generateArrayOfYears();
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
  const [hitpitch, setState2] = useState('null');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function myResponse2() {
      for (let statyear of statyears) {
        try {
          const response2 = await mlbStats.getPerson({
            pathParams: {
              personId: `${content.playerID}/stats?stats=statsSingleSeason&season=${statyear}`,
            },
          });
          const hitpitch = response2.data.stats[0]?.group?.displayName;
          setState2(hitpitch);
          window.localStorage.setItem(statyear, JSON.stringify(response2));
        } catch (err) {
          // eslint-disable-next-line no-console
          console.log(err);
        }
      }
      setLoading(false);
    }

    localStorage.clear();
    myResponse2();
  }, [content.playerID]);

  const renderthis = () => {
    return hitpitch === 'hitting' ? (
      <div className="careerstats">
        <h2>Career Hitting Stats</h2>
        <Table celled>
          <Table.Header>
            <Table.Row>
              {hitcats.map(function (hitcat, index) {
                return <th key={index}>{hitcat}</th>;
              })}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {statyears.map(function (statyear, index2) {
              let newObject = JSON.parse(localStorage.getItem(statyear));
              if (newObject) {
                return (
                  <Table.Row key={index2}>
                    {newObject.data.stats?.map((item, i) => {
                      return <td key={i}>{item.splits[i].season}</td>;
                    })}
                    {newObject.data.stats?.map((item, i) => {
                      if (item.splits[i].numTeams > 1) {
                        return (
                          <td key={i}>
                            {item.splits[1].team.name}/
                            {item.splits[2].team.name}
                          </td>
                        );
                      } else {
                        return <td key={i}>{item.splits[i].team.name}</td>;
                      }
                    })}
                    {newObject.data.stats?.map((item, i) => {
                      if (item.splits[i].numTeams > 1) {
                        if (item.splits[1].league.name === 'National League') {
                          var league1 = 'NL';
                        } else {
                          league1 = 'AL';
                        }
                        if (item.splits[2].league.name === 'National League') {
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
                    {newObject.data.stats?.map((item, i) => {
                      return <td key={i}>{item.splits[i].stat.atBats}</td>;
                    })}
                    {newObject.data.stats?.map((item, i) => {
                      return <td key={i}>{item.splits[i].stat.hits}</td>;
                    })}
                    {newObject.data.stats?.map((item, i) => {
                      return <td key={i}>{item.splits[i].stat.runs}</td>;
                    })}
                    {newObject.data.stats?.map((item, i) => {
                      return <td key={i}>{item.splits[i].stat.homeRuns}</td>;
                    })}
                    {newObject.data.stats?.map((item, i) => {
                      return <td key={i}>{item.splits[i].stat.rbi}</td>;
                    })}
                    {newObject.data.stats?.map((item, i) => {
                      return <td key={i}>{item.splits[i].stat.stolenBases}</td>;
                    })}
                    {newObject.data.stats?.map((item, i) => {
                      return <td key={i}>{item.splits[i].stat.avg}</td>;
                    })}
                    {newObject.data.stats?.map((item, i) => {
                      return <td key={i}>{item.splits[i].stat.obp}</td>;
                    })}
                    {newObject.data.stats?.map((item, i) => {
                      return <td key={i}>{item.splits[i].stat.slg}</td>;
                    })}
                    {newObject.data.stats?.map((item, i) => {
                      return <td key={i}>{item.splits[i].stat.ops}</td>;
                    })}
                  </Table.Row>
                );
              } else {
                return null;
              }
            })}
          </Table.Body>
        </Table>
      </div>
    ) : hitpitch === 'pitching' ? (
      <div className="careerstats">
        <h2>Career Pitching Stats</h2>
        <Table celled>
          <Table.Header>
            <Table.Row>
              {pitchcats.map(function (pitchcat, index) {
                return <th key={index}>{pitchcat}</th>;
              })}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {statyears.map(function (statyear, index2) {
              let newObject = JSON.parse(localStorage.getItem(statyear));
              if (newObject) {
                return (
                  <Table.Row key={index2}>
                    {newObject.data.stats?.map((item, i) => {
                      return <td key={i}>{item.splits[i].season}</td>;
                    })}
                    {newObject.data.stats?.map((item, i) => {
                      if (item.splits[i].numTeams > 1) {
                        return (
                          <td key={i}>
                            {item.splits[1].team.name}/
                            {item.splits[2].team.name}
                          </td>
                        );
                      } else {
                        return <td key={i}>{item.splits[i].team.name}</td>;
                      }
                    })}
                    {newObject.data.stats?.map((item, i) => {
                      if (item.splits[i].numTeams > 1) {
                        if (item.splits[1].league.name === 'National League') {
                          var league1 = 'NL';
                        } else {
                          league1 = 'AL';
                        }
                        if (item.splits[2].league.name === 'National League') {
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
                    {newObject.data.stats?.map((item, i) => {
                      return <td key={i}>{item.splits[i].stat.gamesPlayed}</td>;
                    })}
                    {newObject.data.stats?.map((item, i) => {
                      return (
                        <td key={i}>{item.splits[i].stat.inningsPitched}</td>
                      );
                    })}
                    {newObject.data.stats?.map((item, i) => {
                      return <td key={i}>{item.splits[i].stat.hits}</td>;
                    })}
                    {newObject.data.stats?.map((item, i) => {
                      return <td key={i}>{item.splits[i].stat.earnedRuns}</td>;
                    })}
                    {newObject.data.stats?.map((item, i) => {
                      return <td key={i}>{item.splits[i].stat.baseOnBalls}</td>;
                    })}
                    {newObject.data.stats?.map((item, i) => {
                      return <td key={i}>{item.splits[i].stat.strikeOuts}</td>;
                    })}
                    {newObject.data.stats?.map((item, i) => {
                      return <td key={i}>{item.splits[i].stat.wins}</td>;
                    })}
                    {newObject.data.stats?.map((item, i) => {
                      return <td key={i}>{item.splits[i].stat.saves}</td>;
                    })}
                    {newObject.data.stats?.map((item, i) => {
                      return <td key={i}>{item.splits[i].stat.era}</td>;
                    })}
                    {newObject.data.stats?.map((item, i) => {
                      return <td key={i}>{item.splits[i].stat.whip}</td>;
                    })}
                  </Table.Row>
                );
              } else {
                return null;
              }
            })}
          </Table.Body>
        </Table>
      </div>
    ) : (
      <div className="container"></div>
    );
  };

  var yoyo = renderthis();
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
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
