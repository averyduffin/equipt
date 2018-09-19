const args = require('yargs').argv;
const spawn = require('child_process').spawn;

const cmd = args._[0] || '';
const ops = { stdio: [0, 1, 2], cwd: __dirname };

const BE_PATH = '../backend/src/**/*.js';
const FE_PATH = '../front-end/src/**/*.js*';

const paths = [FE_PATH, BE_PATH];

switch (cmd) {
	case 'lint': {
		const list = [...paths];
		if (args.i === true) {
			list.push('--format');
			list.push('./../node_modules/eslint-friendly-formatter/index.js');
		}
		spawn('./../node_modules/.bin/eslint', list, ops)
			.on('close', (code) => {
				process.exit(args.q === true ? 0 : code);
			})
			.on('error', (err) => {
				console.log(err);
			});
		break;
	}

	case 'pretty': {
		const list = ['--write', ...paths];
		spawn('./../node_modules/.bin/prettier', list, ops).on('close', (code) => {
			process.exit(args.q === true ? 0 : code);
		});
		break;
	}
}
