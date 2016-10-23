const assert = require('assert');
const philosophers = require('./philosophers');

process.stdout.write('Testing...\n');
process.stdout.write("should be accessable with require");
  assert(philosophers.length > 0);
  assert(typeof philosophers[0].name === 'string');
  assert(typeof philosophers[0].picture === 'string');
  process.stdout.write(" ✓\n");

process.stdout.write("Test passes.");
