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
        `https://statsapi.mlb.com/api/v1/schedule?&sportId=1&date=03/27/2023`,
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
      <div className="todaygames">
        <h2>Today's Games</h2>
      {response4.dates?.map((item, i) => {
          return (
          <div key={i}>
            <div>{item.games[i].teams.away.team.name} {item.games[i].teams.away.score}
            &nbsp;@ {item.games[i].teams.home.team.name} {item.games[i].teams.home.score}
            </div>
      </div>)})}
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
