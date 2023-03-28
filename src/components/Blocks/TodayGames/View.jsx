import React, { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * View description block.
 * @module components/manage/Blocks/Description/View
 */

import PropTypes from 'prop-types';

/**
 * View description block class.
 * @class View
 * @extends Component
 */
const View = (props) => {
  const { content } = props;
  const [response4, setState] = useState({});
  const [numGames, setState4] = useState('null');
  async function useResponse4() {
      try {
      const response4 = await axios.get(
        `https://statsapi.mlb.com/api/v1/schedule?&sportId=1`,
      )
      setState(response4.data);
      const numGames = response4.data.totalGames;
      setState4(numGames)  
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    } 
  }
  useEffect(() => {
  useResponse4();
}, []);

    return (
    <div className="container">
      <h2>Today's Games</h2>
      <div className="todaygames">
        {response4.dates?.map((item) => (
          <p key ={item}>
            {item.games?.map((detail) => {
              const gameDatestr = detail.gameDate;
              const gameTime = gameDatestr.substring(11,16); 
              return (<div key={detail}>{detail.teams.away.team.name} <strong>{detail.teams.away.score}</strong>
              &nbsp;@ {detail.teams.home.team.name} <strong>{detail.teams.home.score}</strong>
              &nbsp;| {gameTime} UTC - {detail.status.detailedState}
              </div>)})}
          </p>))}
      </div>
    </div>
  );
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
