import colors from 'colors'; // eslint-disable-line no-unused-vars
import moment from 'moment';

const write = (type, items) => {
	let text = `${moment().format('YYYY-MM-DD HH:mm:ss')} | ${type} |`;
	switch (type) {
		case 'INFO':
			text = text.cyan;
			break;
		case 'ERROR':
			text = text.red;
			break;
		case 'WARN':
			text = text.yellow;
			break;
		case 'DEBUG':
			text = text.green;
			break;
		case 'FATAL':
			text = text.magenta;
			break;
		case 'TRACE':
			text = text.grey;
			break;
	}
	console.log(text, ...items); // eslint-disable-line no-console
};

const logger = {
	info(...items) {
		write('INFO', items);
	},
	debug(...items) {
		write('DEBUG', items);
	},
	warn(...items) {
		write('WARN', items);
	},
	error(...items) {
		write('ERROR', items);
	},
	fatal(...items) {
		write('FATAL', items);
	},
	trace(...items) {
		write('TRACE', items);
	},
};

export default logger;
