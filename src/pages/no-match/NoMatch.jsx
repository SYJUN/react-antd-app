import * as React from 'react';
import PropTypes from 'prop-types';

function NoMatch({ location }) {
  return (
    <div>
      <h3>
        404 page
      </h3>
    </div>
  );
}

NoMatch.propTypes = {
  location: PropTypes.object,
};

export default NoMatch;
