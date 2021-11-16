import { createContext } from "react";
import { SessionPanelUser } from "types";

export interface AuthContextState {
  loggedIn: boolean;
  userName: string;
}

export interface LoginAction {
  type: "login";
  payload: SessionPanelUser;
}

export interface LogoutAction {
  type: "logout";
}

export interface RefreshSessionAction {
  type: "refresh";
}

export type AuthReducerActions =
  | LoginAction
  | LogoutAction
  | RefreshSessionAction;

export interface AuthContext {
  state: AuthContextState;
  dispatch: React.Dispatch<AuthReducerActions>;
}

export const authContext = createContext<AuthContext>({} as AuthContext);
