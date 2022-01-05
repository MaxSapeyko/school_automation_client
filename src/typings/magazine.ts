import { SubjectDto } from './subject';
import { UserDto } from './user';

export interface GradeDto {
  id: string;
  user: UserDto;
  userID: string;
  subject: SubjectDto;
  grade: number;
  date: Date;
}

export interface MagazineDateModel {
  date: moment.Moment | null;
  dateString: string;
}

export interface CreateGradeDto {
  grade: number;
  date: Date;
  userId: string;
  subjectId: string;
}
