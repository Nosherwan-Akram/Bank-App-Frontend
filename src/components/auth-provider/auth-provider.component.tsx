import React, { useReducer, useEffect } from "react";
import { AuthContextState, AuthReducerActions, authContext } from "context";
import { setHeaders, removeHeaders } from "lib";

const reducer = (
  state: AuthContextState,
  action: AuthReducerActions
): AuthContextState => {
  switch (action.type) {
    case "login": {
      const {
        payload: { user, token },
      } = action;
      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(user));
      setHeaders();
      return { loggedIn: true, userName: user.firstName + " " + user.lastName };
    }
    case "refresh": {
      const token = localStorage.getItem("authToken");
      const userStringfied = localStorage.getItem("user");
      if (token && userStringfied) {
        const userObject = JSON.parse(userStringfied);
        setHeaders();
        return {
          loggedIn: true,
          userName: userObject.firstName + " " + userObject.lastName,
        };
      }
      return { loggedIn: false, userName: "" };
    }
    case "logout": {
      localStorage.clear();
      removeHeaders();
      return { loggedIn: false, userName: "" };
    }
    default:
      return state;
  }
};

const { Provider } = authContext;

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    loggedIn: false,
    userName: "",
  });
  useEffect(() => {
    dispatch({ type: "refresh" });
  }, []);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
