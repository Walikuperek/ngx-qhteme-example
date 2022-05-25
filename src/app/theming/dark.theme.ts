import {ITheme} from 'ngx-qtheme';

export const darkTheme: ITheme = {
  name: 'dark',
  atoms: [
    ['bg', 'rgb(28,36,48)'],
    ['bg-darker', 'rgb(18,23,35)'],

    ['text', '#fff'],
    ['text-muted', '#9e9e9e'],
    ['text-primary', 'rgb(116, 127, 242)'],

    ['action', 'rgb(58,58,58)'],
    ['action-text', 'rgb(255,255,255)'],
    ['action-primary', 'rgb(74,63,219)'],
    ['action-primary-text', 'rgb(255,255,255)'],
    ['action-secondary', 'rgb(140,141,145)'],
    ['action-secondary-text', 'rgb(255,255,255)']
  ]
};
