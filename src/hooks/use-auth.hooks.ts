import React, { useContext } from "react";
import {
  authContext,
  AuthContext,
  AuthContextState,
  AuthReducerActions,
} from "context";

export const useAuthState = (): AuthContextState => {
  const { state } = useContext(authContext);
  return state;
};

export const useAuthDispatch = (): React.Dispatch<AuthReducerActions> => {
  const { dispatch } = useContext(authContext);
  return dispatch;
};

export const useAuthStore = (): AuthContext => {
  const authStore = useContext(authContext);
  return authStore;
};
