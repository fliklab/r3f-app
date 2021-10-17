import { atom } from 'recoil';

export const $player = atom({
  key: 'position',
  default: [0,0,0]
});
