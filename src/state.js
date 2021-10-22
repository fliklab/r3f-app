import { atom } from 'recoil';

export const $player = atom({
  key: 'position',
  default: {position:[0,0,0], rotation:[0,0,0]}
});

export const $camera = atom({
  key: 'camera',
  default: {position:[0,0,0], rotation:[0,0,0]}
});
