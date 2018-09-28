import mongoose from 'mongoose';
import { MONGO_DB_URL } from '../constants';
import logger from '../logger';

mongoose.set('useCreateIndex', true);
mongoose.connect(MONGO_DB_URL);

const db = mongoose.connection;

db.on('error', (err) => logger.error('connection error:', err));
db.once('open', function() {
	logger.info('Connected to mongodb');
});
