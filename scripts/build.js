/* eslint-disable no-undef */
/* eslint no-console: 0 */
const fse = require('fs-extra');
const path = require('path');
const colors = require('colors');
const { execSync } = require('child_process');

class WebpackBuild {
  constructor() {
    // 兼容 windows 和 mac 平台
    const SEPARATOR = process.platform === 'win32' ? ';' : ':';
    this.env = Object.assign({}, process.env);
    this.env.PATH = path.resolve('./node_modules/.bin') + SEPARATOR + this.env.PATH;
    this.distPath = path.resolve('./dist');

    process.env.NODE_ENV = 'production';
  }

  run() {
    this.removeDistFolder();
    this.build();
  }

  removeDistFolder() {
    console.log(colors.green('Remove dist folder!\n'));
    fse.removeSync(this.distPath);
  }

  build() {
    execSync('webpack --progress', { 
      stdio: 'inherit', 
      cwd: process.cwd(),
      env: this.env,
    });
  }
}

new WebpackBuild().run();
