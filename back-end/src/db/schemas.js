import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema(
	{
		email: { type: String, index: true, unique: true },
		facebookId: String,
		avatarUrl: String,
		privs: [String],
		firstName: String,
		lastName: String,
		password: String,
	},
	{
		timestamps: true,
		toJSON: { virtuals: true },
	}
);

// usersSchema.virtual('id').get(() => {
// 	return this._id;
// });

usersSchema.statics.hasPriv = (user, priv) => {
	if (!_.isObject(user.privs)) {
		return false;
	}
	if (user.privs.indexOf('super') > -1) {
		return true;
	}
	return user.privs.indexOf(priv) > -1;
};

export const Users = mongoose.model('users', usersSchema);
