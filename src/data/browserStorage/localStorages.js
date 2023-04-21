export const setStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
  return localStorage.getItem(key) !== null ? true : false;
};

export const getStorage = (key) => {
  const data =
    localStorage.getItem(key) !== null ? localStorage.getItem(key) : undefined;
  return data;
};

export const removeStorage = (key) => {
  localStorage.removeItem(key);
  return localStorage.getItem(key) === null ? true : false;
};
