const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// eslint-disable-next-line no-unused-vars
rl.on('line', function (line) {
}).on('close', function () {
    process.exit();
});