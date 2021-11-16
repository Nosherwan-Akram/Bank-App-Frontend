import { useCallback, useState, useEffect } from "react";

/**
 *
 * @param debounceTime Time in milliseconds
 */
export const useDebounce = (
  debounceTime: number
): (<T>(functionToCall: () => T) => void) => {
  const [timer, setTimer] = useState<NodeJS.Timeout>();
  useEffect(() => {
    return () => {
      timer && clearTimeout(timer);
    };
  }, [timer]);
  const debounce = useCallback(
    <T>(functionToCall: () => T) => {
      setTimer(setTimeout(() => functionToCall(), debounceTime));
    },
    [debounceTime]
  );
  return debounce;
};
