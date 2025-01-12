function handshakes(n) {
    // Return the number of handshakes for n attendees
    if (n < 2) return 0; // No handshakes if fewer than 2 people
    return (n * (n - 1)) / 2;
}

// Reading input and processing multiple test cases
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', (line) => {
    input.push(line.trim());
});

rl.on('close', () => {
    const t = parseInt(input[0]); // Number of test cases
    const results = [];
    for (let i = 1; i <= t; i++) {
        const n = parseInt(input[i]);
        results.push(handshakes(n));
    }
    console.log(results.join('\n'));
});
