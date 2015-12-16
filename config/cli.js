const cmd = require('commander');
const pkg = require('app/../../package.json');

module.exports = cmd;

cmd
  .version(pkg.version);

cmd
  .option('-p --port <number>', 'Specify port for app')
  .option('-e, --elasticsearch <string>', 'Specify address for elasticsearch')
  .option('-d, --debug', 'Vebose outpu');

cmd
  .parse(process.argv);
