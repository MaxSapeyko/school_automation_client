import { api } from './api';
import { CreateUserDto, UserDto } from '../typings/user';

class UserService {
  async allUsers(): Promise<UserDto[]> {
    const resp = await api.get('/users');
    return resp.data;
  }

  async userById(id: string): Promise<UserDto> {
    const resp = await api.get(`/users/${id}`);
    return resp.data;
  }

  async userMe(): Promise<UserDto> {
    const resp = await api.get(`/users/me`);
    return resp.data;
  }

  async createUser(req: CreateUserDto): Promise<UserDto> {
    const resp = await api.post('/users', {
      ...req,
    });
    return resp.data;
  }
}

export const userService = new UserService();
