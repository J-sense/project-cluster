import { Student } from './student.interface';
import { StudentModel } from './student.modal';

const createStudentDb = async (students: Student) => {
  const result = await StudentModel.create(students);
  return result;
};
const findStudent = async (id: string) => {
  const result = await StudentModel.findById({ id });
  return result;
};

export const studentService = {
  createStudentDb,
  findStudent,
};
