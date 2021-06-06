import { useCallback } from "react";
import throttle from "lodash.throttle";
import { localStorageNames } from "../constants";

export const useThrottle = (callback, delay) => {
  const debouncedFn = useCallback(
    throttle((...args) => callback(...args), delay),
    [delay] // will recreate if delay changes
  );
  return debouncedFn;
};

export const getLocalStorage = (item) => {
  if (typeof localStorage !== "undefined") {
    if (item === localStorageNames.USER_INFO) {
      return localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : null;
    }
    if (item === localStorageNames.SHIPPING_ADDRESS) {
      return localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : {};
    }
    return localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : [];
  } else {
    return [];
  }
};

export const vhToPixels = (vh: number) => {
  return Math.round(window.innerHeight / (100 / vh));
};
