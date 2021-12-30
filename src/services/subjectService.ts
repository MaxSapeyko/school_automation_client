import { api } from './api';
import { CreateSubjectDto, SubjectDto } from '../typings/subject';

class SubjectService {
  async getAll(): Promise<SubjectDto[]> {
    const resp = await api.get('/subjects');
    return resp.data;
  }

  async subjectById(id: string): Promise<SubjectDto> {
    const resp = await api.get(`/subjects/${id}`);
    return resp.data;
  }

  async deleteSubjectById(id: string): Promise<SubjectDto> {
    const resp = await api.delete(`/subjects/${id}`);
    return resp.data;
  }

  async createSubject(req: CreateSubjectDto): Promise<SubjectDto> {
    const resp = await api.post('/subjects', {
      ...req,
    });
    return resp.data;
  }
}

export const subjectService = new SubjectService();
