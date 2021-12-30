import { UserDto } from './user';

interface SubjectDto {
  id: string;
  title: string;
  classes: string;
  users: UserDto[];
}

interface CreateSubjectDto {
  title: string;
  classes: string;
  users: UserDto;
}
