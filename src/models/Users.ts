import { Schema, model } from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: { type: String, required: true },
	firstname: String,
	lastname: String
});

userSchema.plugin(uniqueValidator);

/*
INFORMATION FOR LATER:

Validation errors will have the following structure:

error = {
            message: 'Validation failed',
            name: 'ValidationError',
            errors: {
                username: {
                    message: 'Error, expected `username` to be unique. Value: `JohnSmith`',
                    name: 'ValidatorError',
                    kind: 'unique',
                    path: 'username',
                    value: 'JohnSmith'
                }
            }
        }
*/

const UserModel = model('User', userSchema);

export default UserModel;
