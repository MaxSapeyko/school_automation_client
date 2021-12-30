import jwt_decode from 'jwt-decode';
import { api } from './api';

import { appState } from '../context/AppState';
import { storageService } from './storageService';
import { userService } from './userService';

interface LogInReq {
  email: string;
  password: string;
}

const ACCESS_TOKEN_KEY = 'access-token';

class AuthService {
  async login(req: LogInReq): Promise<void> {
    const resp = await api.post('/auth/login', req);
    storageService.set(ACCESS_TOKEN_KEY, resp.data.access_token);
    const token: string | null = storageService.get(ACCESS_TOKEN_KEY);
    const decodedUser: any = jwt_decode(token!);
    const user = await userService.userById(decodedUser.id);

    appState.currentUser = user;
  }

  logout(): void {
    storageService.remove(ACCESS_TOKEN_KEY);
  }

  getAccessKey(): string | null {
    return storageService.get(ACCESS_TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    const accessToken = storageService.get(ACCESS_TOKEN_KEY);
    if (!accessToken) {
      return false;
    }
    //todo: check token for expiration

    return true;
  }
}

export const authService = new AuthService();
