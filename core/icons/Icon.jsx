import React from 'react';
import PropTypes from 'prop-types';

function Icon({ className, glyph, ...restProps }) {
  const baseUrl = window.location.href.replace(window.location.hash, '');

  return (
    <svg className={className} {...restProps}>
      <use xlinkHref={`${baseUrl}#${glyph}`} />
    </svg>
  );
}

Icon.propTypes = {
  className: PropTypes.string,
  glyph: PropTypes.string,
};

Icon.defaultProps = {
  className: 'icon',
  glyph: '',
};

export default Icon;
