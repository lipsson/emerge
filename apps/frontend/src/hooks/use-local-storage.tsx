import { isEqual } from "@/utils/helper";
import { localStorageGetItem } from "@/utils/storage-available";
import { useCallback, useMemo, useState } from "react";

export type UseLocalStorageReturn<T> = {
  state: T;
  canReset: boolean;
  resetState: () => void;
  setState: (updateState: T | Partial<T>) => void;
  setField: (name: keyof T, updateValue: T[keyof T]) => void;
};

export function useLocalStorage<T>(
  key: string,
  initialState: T,
): UseLocalStorageReturn<T> {
  // Inicjalizacja leniwa - wykonuje się tylko raz przy montowaniu komponentu
  const [state, set] = useState<T>(() => {
    const restoredValue = getStorage(key);
    if (restoredValue !== null) {
      if (initialState && typeof initialState === "object") {
        return { ...initialState, ...restoredValue };
      }
      return restoredValue;
    }
    return initialState;
  });

  const multiValue = initialState && typeof initialState === "object";

  const canReset = !isEqual(state, initialState);

  const setState = useCallback(
    (updateState: T | Partial<T>) => {
      if (multiValue) {
        set((prevValue) => {
          const nextState = { ...prevValue, ...updateState };
          setStorage<T>(key, nextState);
          return nextState;
        });
      } else {
        setStorage<T>(key, updateState as T);
        set(updateState as T);
      }
    },
    [key, multiValue],
  );

  const setField = useCallback(
    (name: keyof T, updateValue: T[keyof T]) => {
      if (multiValue) {
        setState({ [name]: updateValue } as Partial<T>);
      }
    },
    [multiValue, setState],
  );

  const resetState = useCallback(() => {
    set(initialState);
    removeStorage(key);
  }, [initialState, key]);

  const memoizedValue = useMemo(
    () => ({
      state,
      setState,
      setField,
      resetState,
      canReset,
    }),
    [canReset, resetState, setField, setState, state],
  );

  return memoizedValue;
}

export function getStorage(key: string) {
  try {
    const result = localStorageGetItem(key);

    if (result) {
      return JSON.parse(result);
    }
  } catch (error) {
    console.error("Error while getting from storage:", error);
  }

  return null;
}

export function setStorage<T>(key: string, value: T) {
  try {
    const serializedValue = JSON.stringify(value);
    window.localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error("Error while setting storage:", error);
  }
}

export function removeStorage(key: string) {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.error("Error while removing from storage:", error);
  }
}
