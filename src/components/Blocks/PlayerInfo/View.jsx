import React, { useState, useEffect } from 'react';
/**
 * View description block.
 * @module components/manage/Blocks/Description/View
 */

import PropTypes from 'prop-types';

const MLBStatsAPI = require('@asbeane/mlb-stats-api');

/**
 * View description block class.
 * @class View
 * @extends Component
 */
const View = (props) => {
  const { content } = props;
  const [response, setState] = useState({});

  useEffect(() => {
    const mlbStats = new MLBStatsAPI();
    async function myResponse() {
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
    myResponse();
  }, [content.playerID]);

  return (
    <div className="container">
      <div className="playerinfo">
        {response.people?.map((item, i) => {
          return (
            <div key={i}>
              <div>{item.primaryPosition.name}</div>
              <div>Age: {item.currentAge}</div>
              <div>
                {item.height}, {item.weight}
              </div>
              <div>
                Bats/Throws: {item.batSide.code}/{item.pitchHand.code}
              </div>
            </div>
          );
        })}
      </div>
      <div className="playerdates">
        {response.people?.map((item, i) => {
          return (
            <div key={i}>
              <strong>Born:</strong> {item.birthDate} in {item.birthCity}, {item.birthCountry}
              <br />
              <strong>Debut Date:</strong> {item.mlbDebutDate}
              <br />
              <br />
            </div>
          );
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
