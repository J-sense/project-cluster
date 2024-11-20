import { Request, Response } from 'express';
import { studentService } from './student.service';
import { z } from 'zod';
import studentSchema from './student.validation';
const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.students;
    const zodParseData = studentSchema.parse(student);
    const result = await studentService.createStudentDb(zodParseData);

    res.status(200).json({
      message: 'Student create successfully',
      data: result,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
      success: false,
      data: error,
    });
  }
};

const findStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await studentService.findStudent(id);
    res.status(200).json({
      message: 'Student find successfully',
      data: result,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const studentController = {
  createStudent,
  findStudent,
};
