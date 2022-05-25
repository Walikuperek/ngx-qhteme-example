import {ITheme} from 'ngx-qtheme';

/**
 * Yu can extend theme with your properties.
 */
interface IExtendedTheme extends ITheme {
  myCustomProperty: string;
}

export const extendedLightTheme: IExtendedTheme = {
  myCustomProperty: 'myCustomProperty',
  name: 'light',
  atoms: [
    ['bg', 'rgb(239, 239, 239)'],
    ['bg-darker', 'rgb(210, 210, 210)'],

    ['text', '#212121'],
    ['text-muted', '#adadad'],
    ['text-primary', 'rgb(17,133,245)'],

    ['action', 'rgb(203,203,203)'],
    ['action-text', 'rgb(0,0,0)'],
    ['action-primary', 'rgb(17,133,245)'],
    ['action-primary-text', 'rgb(255,255,255)'],
    ['action-secondary', 'rgb(140,141,145)'],
    ['action-secondary-text', 'rgb(255,255,255)']
  ]
};
