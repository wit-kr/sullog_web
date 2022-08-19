export const STORAGE_KEY = {
  USER: 'user',
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
