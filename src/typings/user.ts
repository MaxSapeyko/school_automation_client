import { Role } from '../utils/enums';

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
