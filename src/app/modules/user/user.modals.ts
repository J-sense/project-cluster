import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';

const UserSchema = new Schema<TUser>({
  id: {
    type: String,
    required: [true, 'provide a valid id'],
    unique: true,
  },
  name: {
    required: true,
    firstName: {
      type: String,
      required: [true, 'Provide First Name'],
    },
    middleName: {
      type: String,
      required: [true, 'Provide a MiddleName'],
    },
    lastName: {
      type: String,
      required: [true, 'Provide a last name'],
    },
  },
  role: {
    type: String,
    enum: {
      values: ['User', 'Admin'],
      message: '{VALUE} is not valid',
    },
  },
  email: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
  },
});

const UserModel = model('User');
