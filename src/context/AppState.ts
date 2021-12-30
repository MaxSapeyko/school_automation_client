import { UserDto } from '../typings/user';

export class AppState {
  private _auth: boolean;
  private _currentUser: UserDto | null;
  private _render: () => void;

  constructor(
    auth: boolean = false,
    currentUser: UserDto | null = null,
    render: () => void = () => {}
  ) {
    this._auth = auth;
    this._currentUser = currentUser;
    this._render = render;
  }

  set render(value: () => void) {
    this._render = value;
  }

  get auth(): boolean {
    return this._auth;
  }

  set auth(value: boolean) {
    this._auth = value;
    this._render();
  }

  get currentUser(): UserDto | null {
    return this._currentUser;
  }

  set currentUser(value: UserDto | null) {
    this._currentUser = value;
    this._render();
  }
}

export const appState = new AppState();
