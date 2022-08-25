import { atom } from 'recoil';

export const expState = atom({
  key: 'expState',
  default: {},
});

export const expSearchData = atom({
  key: 'expSearch',
  default: '',
});
