import { useCallback, useReducer, useEffect } from "react";
import { AxiosError, AxiosResponse } from "axios";
import { useAuthDispatch, useDebounce } from "hooks";

interface UseAxiosState<T, J extends Array<unknown>> {
  status: "pending" | "success" | "error";
  loading: boolean;
  data?: T;
  params: J;
  error: string;
  statusCode?: number;
}

interface FetchingAction<J extends Array<unknown>> {
  payload: { params: J };
  type: "fetching";
}

interface ErrorAction {
  payload: {
    error: string;
    statusCode?: number;
  };
  type: "error";
}

interface RefetchAction {
  type: "refetch";
}

interface SuccessAction<T> {
  type: "success";
  payload: {
    data: T;
    statusCode?: number;
  };
}

type UseAxiosActions<T, J extends Array<unknown>> =
  | FetchingAction<J>
  | ErrorAction
  | RefetchAction
  | SuccessAction<T>;

const reducer = <T, J extends Array<unknown>>() => (
  state: UseAxiosState<T, J>,
  action: UseAxiosActions<T, J>
): UseAxiosState<T, J> => {
  switch (action.type) {
    case "fetching": {
      return {
        ...state,
        loading: true,
        status: "pending",
        error: "",
        statusCode: undefined,
        ...action.payload,
      };
    }
    case "refetch": {
      return {
        ...state,
        loading: true,
        status: "pending",
      };
    }
    case "error": {
      return { ...state, loading: false, status: "error", ...action.payload };
    }
    case "success": {
      return {
        ...state,
        loading: false,
        status: "success",
        error: "",
        ...action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

interface UseAxiosReturnType<T, J extends Array<unknown>> {
  data?: UseAxiosState<T, J>["data"];
  loading: UseAxiosState<T, J>["loading"];
  status: UseAxiosState<T, J>["status"];
  statusCode: UseAxiosState<T, J>["statusCode"];
  error: UseAxiosState<T, J>["error"];
  appFetch: (...params: UseAxiosState<T, J>["params"]) => void;
  refetch: () => void;
}

export const useAxios = <T, J extends Array<unknown>>(
  axiosRequest: (...params: J) => Promise<AxiosResponse<T>>
): UseAxiosReturnType<T, J> => {
  const [state, dispatch] = useReducer(reducer<T, J>(), {
    loading: false,
    error: "",
    status: "pending",
    params: ([] as unknown) as J,
  });
  const debounce = useDebounce(300);
  const appFetch = useCallback((...params: J) => {
    dispatch({
      type: "fetching",
      payload: { params: params ?? (([] as unknown) as J) },
    });
  }, []);
  const refetch = useCallback(() => {
    dispatch({ type: "refetch" });
  }, []);
  const authDispatch = useAuthDispatch();
  useEffect(() => {
    if (state.statusCode && state.statusCode === 401)
      authDispatch({ type: "logout" });
  }, [state.statusCode, authDispatch]);
  useEffect(() => {
    if (state.loading) {
      debounce(() => {
        axiosRequest(...state.params)
          .then((response) => {
            dispatch({
              type: "success",
              payload: { data: response.data, statusCode: response.status },
            });
          })
          .catch((error: AxiosError) => {
            dispatch({
              type: "error",
              payload: { error: error.response?.data ?? error.message },
            });
          });
      });
    }
  }, [state.loading, state.params, axiosRequest, debounce]);
  return {
    appFetch,
    refetch,
    loading: state.loading,
    statusCode: state.statusCode,
    status: state.status,
    data: state.data,
    error: state.error,
  };
};
