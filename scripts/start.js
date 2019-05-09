/* eslint no-console: 0 */
const { spawn } = require('child_process');
// 跨平台兼容版第三方库 ： const spawn = require('cross-spawn');  Node.js v6 版本

class WebpackStart {
  constructor() {
    process.env.NODE_ENV = 'development';
  }

  run() {
    this.start();
  }
  
  start() {
    spawn('webpack-dev-server', ['--progress', '--compress'], { 
      stdio: 'inherit', 
      shell: process.platform === 'win32',    // 仅在当前运行环境为 Windows 时，才使用 shell
    }); 
  }
}

new WebpackStart().run();