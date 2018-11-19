const colors = {
  stable: '#f8f8f8',
  positive: '#459df5',
  positiveBg: '#deefff',
  gray: '#858e99',
  optionColor: '#666',
  grayLine: '#e8e8e8',
  grayBg: '#edf1f5',
  dark: '#222',
  grayStreak: '#f9f9f9',
};

const sizes = {
  listHeaderHeight: '60px',
  footButtonHeight: '45px',
};

const fontSizes = {
  small: '12px',
  base: '14px',
  big: '16px',
  large: '18px',
};

const clearfix = `
  &:before {
    content: '';
    visibility: hidden;
    display: block;
    height: 0;
    zoom: 1;
    clear: both;
  }

  &:after {
    content: '';
    visibility: hidden;
    display: block;
    height: 0;
    zoom: 1;
    clear: both;
  }
`;

export {
  colors,
  sizes,
  fontSizes,
  clearfix,
};
