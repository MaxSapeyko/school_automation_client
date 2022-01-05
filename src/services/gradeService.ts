import { api } from './api';
import { CreateGradeDto, GradeDto } from '../typings/magazine';

class GradeService {
  async allGrades(): Promise<GradeDto[]> {
    const resp = await api.get('/grade');
    return resp.data;
  }

  async gradeById(id: string): Promise<GradeDto> {
    const resp = await api.get(`/grade/${id}`);
    return resp.data;
  }

  async deleteGradeById(id: string): Promise<GradeDto> {
    const resp = await api.delete(`/grade/${id}`);
    return resp.data;
  }

  async createGrade(req: CreateGradeDto): Promise<GradeDto> {
    const resp = await api.post('/grade', {
      ...req,
    });
    return resp.data;
  }
}

export const gradeService = new GradeService();
