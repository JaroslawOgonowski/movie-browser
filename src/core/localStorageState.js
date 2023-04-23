const localStorageKey = "generalState";

export const saveStateInLocalStorage = (generalState) => {
  localStorage.setItem(localStorageKey, JSON.stringify(generalState));
};

export const getStateFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageKey));