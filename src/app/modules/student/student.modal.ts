import mongoose, { model, Schema } from 'mongoose';
import { Student, UserName } from './student.interface';
import bcrypt from 'bcrypt';
import validator from 'validator';
import config from '../../config';
const userName = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    maxlength: [20, 'FirstName should not be 20 Charecter'],
    validate: {
      validator: function (value: string) {
        const firstnum =
          value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        return firstnum === value;
      },
      message: '{VALUE} is not capitalize format',
    },
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function (value: string) {
        const lastnum =
          value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        return lastnum === value;
      },
      message: '{VALUE} IS NOT CAPITALIZE FORMAT',
    },
  },
  middleName: {
    type: String,
    required: true,
  },
});
const studentSchema = new Schema<Student>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: userName,
    required: true,
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: '{VALUE} is not valid',
    },
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: '{VALUE} is not assignable',
    },
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  emergencyContactNo: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
    enum: [
      'A',
      'B',
      'AB',
      'O',
      'A+',
      'A-',
      'B+',
      'B-',
      'AB+',
      'AB-',
      'O+',
      'O-',
    ],
    required: true,
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true }, // Corrected spelling
  guardian: {
    fatherName: {
      type: String,
      required: true,
    },
    fatherOccupation: {
      type: String,
      required: true,
    },
    fatherContactNo: {
      type: String,
      required: true,
    },
    motherName: {
      type: String,
      required: true,
    },
    motherOccupation: {
      type: String,
      required: true,
    },
    motherContactNo: {
      type: String,
      required: true,
    },
  },
  profileImage: {
    type: String,
    required: true,
  },
  isActive: {
    type: String,
    enum: ['active', 'inactive'], // Updated to match enum
    default: 'active',
  },
});
// middleware start
studentSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});
export const StudentModel = model<Student>('User', studentSchema);
