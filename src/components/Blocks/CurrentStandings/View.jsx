import React, { Fragment, useState, useEffect } from 'react';
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
      );
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
      <div className="currentstandings">
        <div className="americanleague">
          <h3>American League</h3>
          <Table celled>
            <Table.Header>
              <Table.Row>
                {response5.records?.map((item, i) => {
                  if (item.league.id == 103) {
                    return (
                      <Fragment key={i}>
                        <th>{item.division.nameShort}</th>
                        <th>W-L</th>
                        <th>PCT</th>
                        <th>GB</th>
                        <th>STK</th>
                      </Fragment>
                    );
                  }
                })}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                {response5.records?.map((item, i) => {
                  if (item.league.id == 103) {
                    return (
                      <Fragment key={i}>
                        <td>{item.teamRecords[0].team.name}</td>
                        <td>
                          {item.teamRecords[0].leagueRecord.wins}-
                          {item.teamRecords[0].leagueRecord.losses}
                        </td>
                        <td>{item.teamRecords[0].leagueRecord.pct}</td>
                        <td>{item.teamRecords[0].gamesBack}</td>
                        <td>{item.teamRecords[0].streak.streakCode}</td>
                      </Fragment>
                    );
                  }
                })}
              </Table.Row>
              <Table.Row>
                {response5.records?.map((item, i) => {
                  if (item.league.id == 103) {
                    return (
                      <Fragment key={i}>
                        <td>{item.teamRecords[1].team.name}</td>
                        <td>
                          {item.teamRecords[1].leagueRecord.wins}-
                          {item.teamRecords[1].leagueRecord.losses}
                        </td>
                        <td>{item.teamRecords[1].leagueRecord.pct}</td>
                        <td>{item.teamRecords[1].gamesBack}</td>
                        <td>{item.teamRecords[1].streak.streakCode}</td>
                      </Fragment>
                    );
                  }
                })}
              </Table.Row>
              <Table.Row>
                {response5.records?.map((item, i) => {
                  if (item.league.id == 103) {
                    return (
                      <Fragment key={i}>
                        <td>{item.teamRecords[2].team.name}</td>
                        <td>
                          {item.teamRecords[2].leagueRecord.wins}-
                          {item.teamRecords[2].leagueRecord.losses}
                        </td>
                        <td>{item.teamRecords[2].leagueRecord.pct}</td>
                        <td>{item.teamRecords[2].gamesBack}</td>
                        <td>{item.teamRecords[2].streak.streakCode}</td>
                      </Fragment>
                    );
                  }
                })}
              </Table.Row>
              <Table.Row>
                {response5.records?.map((item, i) => {
                  if (item.league.id == 103) {
                    return (
                      <Fragment key={i}>
                        <td>{item.teamRecords[3].team.name}</td>
                        <td>
                          {item.teamRecords[3].leagueRecord.wins}-
                          {item.teamRecords[3].leagueRecord.losses}
                        </td>
                        <td>{item.teamRecords[3].leagueRecord.pct}</td>
                        <td>{item.teamRecords[3].gamesBack}</td>
                        <td>{item.teamRecords[3].streak.streakCode}</td>
                      </Fragment>
                    );
                  }
                })}
              </Table.Row>
              <Table.Row>
                {response5.records?.map((item, i) => {
                  if (item.league.id == 103) {
                    return (
                      <Fragment key={i}>
                        <td>{item.teamRecords[4].team.name}</td>
                        <td>
                          {item.teamRecords[4].leagueRecord.wins}-
                          {item.teamRecords[4].leagueRecord.losses}
                        </td>
                        <td>{item.teamRecords[4].leagueRecord.pct}</td>
                        <td>{item.teamRecords[4].gamesBack}</td>
                        <td>{item.teamRecords[4].streak.streakCode}</td>
                      </Fragment>
                    );
                  }
                })}
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
        <div className="nationalleague">
          <h3>National League</h3>
          <Table celled>
            <Table.Header>
              <Table.Row>
                {response5.records?.map((item, i) => {
                  if (item.league.id == 104) {
                    return (
                      <Fragment key={i}>
                        <th>{item.division.nameShort}</th>
                        <th>W-L</th>
                        <th>PCT</th>
                        <th>GB</th>
                        <th>STK</th>
                      </Fragment>
                    );
                  }
                })}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                {response5.records?.map((item, i) => {
                  if (item.league.id == 104) {
                    return (
                      <Fragment key={i}>
                        <td>{item.teamRecords[0].team.name}</td>
                        <td>
                          {item.teamRecords[0].leagueRecord.wins}-
                          {item.teamRecords[0].leagueRecord.losses}
                        </td>
                        <td>{item.teamRecords[0].leagueRecord.pct}</td>
                        <td>{item.teamRecords[0].gamesBack}</td>
                        <td>{item.teamRecords[0].streak.streakCode}</td>
                      </Fragment>
                    );
                  }
                })}
              </Table.Row>
              <Table.Row>
                {response5.records?.map((item, i) => {
                  if (item.league.id == 104) {
                    return (
                      <Fragment key={i}>
                        <td>{item.teamRecords[1].team.name}</td>
                        <td>
                          {item.teamRecords[1].leagueRecord.wins}-
                          {item.teamRecords[1].leagueRecord.losses}
                        </td>
                        <td>{item.teamRecords[1].leagueRecord.pct}</td>
                        <td>{item.teamRecords[1].gamesBack}</td>
                        <td>{item.teamRecords[1].streak.streakCode}</td>
                      </Fragment>
                    );
                  }
                })}
              </Table.Row>
              <Table.Row>
                {response5.records?.map((item, i) => {
                  if (item.league.id == 104) {
                    return (
                      <Fragment key={i}>
                        <td>{item.teamRecords[2].team.name}</td>
                        <td>
                          {item.teamRecords[2].leagueRecord.wins}-
                          {item.teamRecords[2].leagueRecord.losses}
                        </td>
                        <td>{item.teamRecords[2].leagueRecord.pct}</td>
                        <td>{item.teamRecords[2].gamesBack}</td>
                        <td>{item.teamRecords[2].streak.streakCode}</td>
                      </Fragment>
                    );
                  }
                })}
              </Table.Row>
              <Table.Row>
                {response5.records?.map((item, i) => {
                  if (item.league.id == 104) {
                    return (
                      <Fragment key={i}>
                        <td>{item.teamRecords[3].team.name}</td>
                        <td>
                          {item.teamRecords[3].leagueRecord.wins}-
                          {item.teamRecords[3].leagueRecord.losses}
                        </td>
                        <td>{item.teamRecords[3].leagueRecord.pct}</td>
                        <td>{item.teamRecords[3].gamesBack}</td>
                        <td>{item.teamRecords[3].streak.streakCode}</td>
                      </Fragment>
                    );
                  }
                })}
              </Table.Row>
              <Table.Row>
                {response5.records?.map((item, i) => {
                  if (item.league.id == 104) {
                    return (
                      <Fragment key={i}>
                        <td>{item.teamRecords[4].team.name}</td>
                        <td>
                          {item.teamRecords[4].leagueRecord.wins}-
                          {item.teamRecords[4].leagueRecord.losses}
                        </td>
                        <td>{item.teamRecords[4].leagueRecord.pct}</td>
                        <td>{item.teamRecords[4].gamesBack}</td>
                        <td>{item.teamRecords[4].streak.streakCode}</td>
                      </Fragment>
                    );
                  }
                })}
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
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
