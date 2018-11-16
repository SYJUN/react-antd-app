const path = require('path');
const fs = require('fs');

module.exports = (brand) => {
  const packagePath = path.join(__dirname, 'package.json');
  const package = fs.existsSync(packagePath) ? require(packagePath) : {};

  let theme = {};
  if (package.theme && typeof package.theme === 'string') {
    let themeConfPath = package.theme;
    if (themeConfPath.charAt(0) === '.') {
      themeConfPath = path.resolve(__dirname, themeConfPath);
    }
    const getThemeConf = require(themeConfPath);
    theme = getThemeConf(brand);
  } else if (package.theme && typeof package.theme === 'object') {
    theme = package.theme;
  }

  return theme;
};