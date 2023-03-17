import React, { useState, useEffect } from 'react';
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
    async function useResponse2() {
      try {
        const response2 = await mlbStats.getPerson({
          pathParams: {
            personId: `${content.playerID}/stats?stats=statsSingleSeason&season=2022`,
          },
        })
        setState(response2.data)
        const hitpitch = response2.data.stats[0].group.displayName
        setState2(hitpitch)
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    }
    useEffect(() => {
    useResponse2();
  }, []);
  
      return (
        (hitpitch === 'hitting') ? (
          <div className="container">
        <h3>2022 Hitting Stats</h3>
        <table border="1">
          <thead>
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
          </thead>
          <tbody><tr>
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
          </tbody>
        </table>
      </div>
    ) 
    :
    (hitpitch === 'pitching') ? 
    (
        <div className="container">
        <h3>2022 Pitching Stats</h3>
          <table border="1">
            <thead>
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
            </thead>
            <tbody>
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
            </tbody>
          </table>
        </div>
      )
  : 
   (
        <div className="container"></div>
      )
      )
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