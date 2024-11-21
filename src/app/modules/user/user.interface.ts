import { Schema, model, connect } from 'mongoose';

export type Username = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export interface TUser {
  id: string;
  name: Username;
  role: 'User' | 'Admin';
  email: string;
  profile: string | null;
}
