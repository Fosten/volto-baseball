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
  const { content } = props;
  const [response5, setState] = useState({});
  async function useResponse5() {
      try {
      const response5 = await axios.get(
        `https://statsapi.mlb.com/api/v1/standings?leagueId=103,104&hydrate=division`,
      )
      setState(response5.data);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    } 
  }
  useEffect(() => {
  useResponse5();
}, []);

  return (
    <div className="container">
      <h2>Current Standings</h2>
      <div className="todaygames">
          {response5.records?.map((item, i) => {
            return (<Table celled key={i}>
          <Table.Header>
            <Table.Row>
            <th>{item.division.name}</th>
            </Table.Row>
          </Table.Header>
          <Table.Body>
          <Table.Row>
          <td>{item.teamRecords[0].team.name} ({item.teamRecords[0].leagueRecord.wins} - {item.teamRecords[0].leagueRecord.losses})</td>
          </Table.Row>
          <Table.Row>
          <td>{item.teamRecords[1].team.name} ({item.teamRecords[1].leagueRecord.wins} - {item.teamRecords[0].leagueRecord.losses})</td>
          </Table.Row>
          <Table.Row>
          <td>{item.teamRecords[2].team.name} ({item.teamRecords[2].leagueRecord.wins} - {item.teamRecords[0].leagueRecord.losses})</td>
          </Table.Row>
          <Table.Row>
          <td>{item.teamRecords[3].team.name} ({item.teamRecords[3].leagueRecord.wins} - {item.teamRecords[0].leagueRecord.losses})</td>
          </Table.Row>
          <Table.Row>
          <td>{item.teamRecords[4].team.name} ({item.teamRecords[4].leagueRecord.wins} - {item.teamRecords[0].leagueRecord.losses})</td>
          </Table.Row>
          </Table.Body>
          </Table>)
      })}
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
