process.stdout.write('Welcome to Holberton School, what is your name?');

process.stdin.on('readable' = () => {
const test = process.stdin.read();

if (test) {
    process.stdout.write(`Your name is: ${test}`);

    } 
})

process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing');
});