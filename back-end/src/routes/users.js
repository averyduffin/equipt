import jwt from 'jsonwebtoken';
import { Users } from '../db/schemas';
import { JWT_SECRET, JWT_ISSUER } from '../constants';
import { missingParams, sendError } from '../utils';
import logger from '../logger';

// if (missingParams(['server', 'vendorUserId'], req.body, res)) return;

export const getAllUsers = (req, res) => {};

export const getUser = (req, res) => {};

export const setUser = (req, res) => {
	if (missingParams(['email', 'firstName', 'lastName', 'password'], req.body, res)) return;
	const { email, facebookId, avatarUrl, lastName, firstName, password } = req.body;
	const user = new Users();
	if (!facebookId && !password && email) return res.sendStatus(400);
	user.email = email;
	user.facebookId = facebookId;
	user.avatarUrl = avatarUrl;
	user.lastName = lastName;
	user.firstName = firstName;
	user.password = password;
	const token = jwt.sign({ id: user._id, name: user.name }, JWT_SECRET, {
		expiresIn: '30 days',
		issuer: JWT_ISSUER,
	});
	user.save((err) => {
		if (err) {
			logger.error(err);
			return sendError(res, 'Unable to create user', {}, 500);
		}
		res.json({ token }).status(200);
	});
};
