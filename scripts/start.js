/* eslint no-console: 0 */
const { spawn } = require('child_process');

class WebpackStart {
  constructor() {
    process.env.NODE_ENV = 'development';
  }

  run() {
    this.start();
  }
  
  start() {
    spawn('webpack-dev-server', ['--progress', '--compress'], { stdio: 'inherit' });
  }
}

new WebpackStart().run();