import { z } from 'zod';

// Define the UserName schema
const userNameSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .max(20, 'First name should not exceed 20 characters')
    .refine(
      (value) =>
        value.charAt(0).toUpperCase() + value.slice(1).toLowerCase() === value,
      { message: 'First name must be in capitalized format' },
    ),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .refine(
      (value) =>
        value.charAt(0).toUpperCase() + value.slice(1).toLowerCase() === value,
      { message: 'Last name must be in capitalized format' },
    ),
  middleName: z.string().min(1, 'Middle name is required'),
});

// Define the Guardian schema
const guardianSchema = z.object({
  fatherName: z.string().min(1, 'Father name is required'),
  fatherOccupation: z.string().min(1, 'Father occupation is required'),
  fatherContactNo: z.string().min(1, 'Father contact number is required'),
  motherName: z.string().min(1, 'Mother name is required'),
  motherOccupation: z.string().min(1, 'Mother occupation is required'),
  motherContactNo: z.string().min(1, 'Mother contact number is required'),
});

// Define the main Student schema
const studentSchema = z.object({
  id: z.string().min(1, 'ID is required'),
  password: z.string().max(20, 'Password should be 20 charecter'),
  name: userNameSchema,
  gender: z.enum(['male', 'female', 'other'], {
    required_error: 'Gender is required',
  }),
  email: z.string().email('Invalid email address'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  contactNo: z.string().min(1, 'Contact number is required'),
  emergencyContactNo: z.string().min(1, 'Emergency contact number is required'),
  bloodGroup: z.enum(
    ['A', 'B', 'AB', 'O', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    { required_error: 'Blood group is required' },
  ),
  presentAddress: z.string().min(1, 'Present address is required'),
  permanentAddress: z.string().min(1, 'Permanent address is required'),
  guardian: guardianSchema,
  profileImage: z.string().min(1, 'Profile image is required'),
  isActive: z.enum(['active', 'inactive']).default('active'),
});

export default studentSchema;
