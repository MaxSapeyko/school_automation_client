import { SubjectDto } from './subject';
import { UserDto } from './user';

export interface GradeDto {
  user: UserDto;
  subject: SubjectDto;
  grade: number;
  date: Date;
}
