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
  const [response, setState] = useState({});
  async function useResponse() {
    try {
      const response = await mlbStats.getPerson({
        pathParams: { personId: content.playerID },
      });
      setState(response.data);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    } 
  }
  useEffect(() => {
  useResponse();
}, []);

  return (
    <div className="container">
      <h2>Player Info</h2>
      {response.people?.map((item, i) => {
        return <p key={i}><strong>Primary Position:</strong> {item.primaryPosition.name}<br />
        <strong>Born:</strong> {item.birthDate} in {item.birthCity}, {item.birthCountry} (Age: {item.currentAge})<br />
        <strong>Bats/Throws:</strong> {item.batSide.description}/{item.pitchHand.description}<br />
        <strong>Height, Weight:</strong> {item.height}, {item.weight}<br />
        <strong>Debut Date:</strong> {item.mlbDebutDate}<br /><br /></p>;
      })}
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
