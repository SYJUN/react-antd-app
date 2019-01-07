/* eslint-disable no-undef */
/* eslint no-console: 0 */
const fse = require('fs-extra');
const path = require('path');
const colors = require('colors');
const { execSync } = require('child_process');

class WebpackBuild {
  constructor() {
    this.distPath = path.resolve('./dist');

    process.env.NODE_ENV = 'production';
  }

  run() {
    this.removeDistFolder();
    this.build();
  }

  removeDistFolder() {
    console.log(colors.green(`Remove dist folder!\n`));
    fse.removeSync(this.distPath);
  }

  build() {
    execSync('webpack --progress', { stdio: 'inherit' });
  }
}

new WebpackBuild().run();
