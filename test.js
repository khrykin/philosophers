const assert = require('assert');
const philosophers = require('./philosophers');

console.log('Testing...');
process.stdout.write("should be accessable with require");
  assert(philosophers.length > 0);
  assert(typeof philosophers[0].name === 'string');
  assert(typeof philosophers[0].picture === 'string');
  console.log(" ✓");

console.log("Test passes!");
