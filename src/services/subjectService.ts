import { api } from './api';
import { UserDto } from '../typings/user';
import { CreateSubjectDto, SubjectDto } from '../typings/subject';

class SubjectService {
  async getAll(): Promise<SubjectDto[]> {
    const resp = await api.get('/subjetcs');
    return resp.data;
  }

  async subjectById(id: string): Promise<SubjectDto> {
    const resp = await api.get(`/subjetcs/${id}`);
    return resp.data;
  }

  async deleteSubjectById(id: string): Promise<SubjectDto> {
    const resp = await api.delete(`/subjetcs/${id}`);
    return resp.data;
  }

  async createSubject(req: CreateSubjectDto): Promise<SubjectDto> {
    const resp = await api.post('/subjetcs', {
      ...req,
    });
    return resp.data;
  }
}

export const subjectService = new SubjectService();
