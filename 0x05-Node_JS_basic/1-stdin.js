<<<<<<< HEAD
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
	const name = process.stdin.read();
	if (name !== null) {
	process.stdout.write(`Your name is: ${name}`);
	}
});
process.stdin.on('end', () => {
	process.stdout.write('This important software is now closing\n');
});
=======
process.stdout.write('Welcome to holberton School, what is your name?\n');

process.stdin.on('readable', () => {
    const name = process.stdin.read();
    if (name) {
        process.stdout.write(`Your name is: ${name}`);
    }
})
process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
})
>>>>>>> 16126ee414d86f2886f939a9932042fd9ab8c39c
