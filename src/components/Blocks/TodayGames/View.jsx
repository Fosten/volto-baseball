import React, { useState, useEffect } from 'react';
import { Table } from 'semantic-ui-react';
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
  const [response4, setState] = useState({});
  async function myResponse4() {
    try {
      const response4 = await axios.get(
        `https://statsapi.mlb.com/api/v1/schedule?&sportId=1`,
      );
      setState(response4.data);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }
  useEffect(() => {
    myResponse4();
  }, []);

  return (
    <div className="container">
      <h2>Today's Games</h2>
      <div className="todaygames">
        <Table celled>
          <Table.Header>
            <Table.Row>
              <th>Away Team</th>
              <th>Score</th>
              <th>Home Team</th>
              <th>Score</th>
              <th>Start Time</th>
              <th>Game Status</th>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {response4.dates?.map((item) =>
              item.games?.map((detail) => {
                const gameDatestr = detail.gameDate;
                const gameTime = gameDatestr.substring(11, 16);
                return (
                  <Table.Row key={item}>
                    <td key={detail}>{detail.teams.away.team.name}</td>
                    <td key={detail}>
                      <strong>{detail.teams.away.score}</strong>
                    </td>
                    <td key={detail}>@ {detail.teams.home.team.name}</td>
                    <td key={detail}>
                      <strong>{detail.teams.home.score}</strong>
                    </td>
                    <td key={detail}>{gameTime} UTC</td>
                    <td key={detail}>{detail.status.detailedState}</td>
                  </Table.Row>
                );
              }),
            )}
          </Table.Body>
        </Table>
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
