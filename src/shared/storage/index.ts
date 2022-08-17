export const KEY = {
  TOKEN: 'token',
  TYPE: 'type',
};

export const setStorage = (key: string, data: any) => {
  window.localStorage.setItem(key, JSON.stringify(data));
};

export const getStorage = (key: string) => {
  const item = window.localStorage.getItem(key);
  if (item) {
    return JSON.parse(item);
  }
  return undefined;
};
