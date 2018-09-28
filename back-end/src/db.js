import mongoose from 'mongoose';
import { MONGO_DB_URL } from './constants';

mongoose.connect(MONGO_DB_URL);
