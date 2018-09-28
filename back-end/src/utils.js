import _ from 'lodash';
import jwt from 'jsonwebtoken';
import logger from './logger';

export const sendError = (res, msg, data = {}, code = 400) => {
	logger.error(msg);
	res.status(code).json({ error: msg, ...data });
};

export const missingParams = (params, ob, res) => {
	const missing = [];
	params.forEach((param) => {
		const val = _.get(ob, param);
		if (_.isNil(val) || (_.isString(val) && val.trim() === '')) missing.push(param);
	});
	if (missing.length > 0) {
		const plural = missing.length === 1 ? '' : 's';
		if (res) sendError(res, `Missing parameter${plural}: ${missing.join(', ')}`);
		return true;
	}
	return false;
};

export const validateJwt = (req, res, next) => {
	const token = _.get(req, 'query.token');
	jwt.verify(token, JWT_SECRET, (err, payload) => {
		if (err) return res.sendStatus(401);
		req.userId = payload.userId || payload.user_id;
		next();
	});
};

export const getIp = (req) => {
	return (
		req.headers['x-forwarded-for'] ||
		req.connection.remoteAddress ||
		req.socket.remoteAddress ||
		req.connection.socket.remoteAddress
	).split(',')[0];
};

export const systemOnly = (req, res, next) => {
	const ip = getIp(req);
	if (ip.indexOf('127.0.0.1') < 0 && ip !== '::1') {
		res.sendStatus(401);
		logger.warn('Received request from outside localhost', { ip });
		return;
	}
	next();
};
