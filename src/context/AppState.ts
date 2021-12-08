export class AppState {
  private _auth: boolean; 
  private _render: () => void;

  constructor(
    auth: boolean = false,
    render: () => void = () => {},
  ) {
    this._auth = auth;
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
}

export const appState = new AppState(); 
