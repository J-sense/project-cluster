import { Schema, model, connect } from 'mongoose';

type Guardian = {
  fatherName: string;
  fatherOccupation: string; // Corrected spelling
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string; // Corrected spelling
  motherContactNo: string;
};

export type UserName = {
  firstName: string;
  lastName: string;
  middleName: string;
};

type LocalGuardian = {
  name: string; // Corrected field name (consistency with camelCase)
  occupation: string;
  contactNo: string;
};

export type Student = {
  id: string;
  password: string;
  name: UserName;
  gender: 'male' | 'female' | 'other';
  email: string;
  dateOfBirth: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup:
    | 'A'
    | 'B'
    | 'AB'
    | 'O'
    | 'A+'
    | 'A-'
    | 'B+'
    | 'B-'
    | 'AB+'
    | 'AB-'
    | 'O+'
    | 'O-';
  presentAddress: string;
  permanentAddress: string; // Corrected spelling
  guardian: Guardian;
  // localGuardian: LocalGuardian; // Corrected field name (camelCase consistency)
  profileImage?: string; // Corrected spelling
  isActive: 'active' | 'inactive';
};
