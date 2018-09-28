import express from 'express';
import bodyParser from 'body-parser';

import logger from './logger';
import './db';
import { getAllUsers, getUser, setUser } from './routes/users';
const app = express();

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/users', getAllUsers);
app.get('/api/user/:id', getUser);
app.post('/api/user', setUser);

app.listen(PORT, () => logger.info(`Backend app listening on port ${PORT}`));
