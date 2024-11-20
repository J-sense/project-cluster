import express from 'express';
import { studentController } from './student.controller';

const router = express.Router();

router.post('/create-student', studentController.createStudent);
router.get('/:id', studentController.findStudent);

export const studentRoutes = router;
