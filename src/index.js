process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');

function printf() {
  var args = Array.prototype.slice.call(arguments);
  process.stdout.write(args.join(' '));
};

function prompt() {
  printf('> ');
};

prompt();

var history = [];

process.stdin.on('data', function (text) {
  console.log('received data:', util.inspect(text));
  history.push(text);
  if (text === 'quit\n') {
    done();
  } else {
    prompt();
  }
});

function done() {
  console.log('Now that process.stdin is paused, there is nothing more to do.');
  process.exit();
}

process.on('SIGINT', function () {
  console.log();
  console.log('^D to exit.');
  prompt();
});
