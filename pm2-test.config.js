module.exports = {
  apps: [
    {
      name: 'Ltd',
      script: './index.js',
      exec_interpreter: 'node',
      exec_mode: 'fork',
      watch: false,
      env: {
        NODE_ENV: 'testing',
        NODE_PATH: './src',
        PORT: 8090
      }
    }
  ]
};
