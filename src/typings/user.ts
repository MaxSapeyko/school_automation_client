import { Role } from '../utils/enums';
import { GradeDto } from './magazine';

export interface UserDto {
  id: string;
  name: string;
  surname: string;
  lastname: string;
  phone: string;
  role: Role;
  email: string;
  password: string;
  dateOfBirth: string;
  class: string;
  sex: string;
  photoUrl: string;
  education: string;
  universityAddress: string;
  position: string;
  specialization: string;
  grade: GradeDto | null;
  grades: GradeDto[];
  classes: string[];
}

export interface CreateUserDto {
  name: string;
  surname: string;
  lastname: string;
  phone: string;
  email: string;
  password: string;
  role: Role;
  dateOfBirth: string;
  class: string;
  sex: string;
  photoUrl: string;
  education: string;
  universityAddress: string;
  position: string;
  specialization: string;
  classes: string[];
}
