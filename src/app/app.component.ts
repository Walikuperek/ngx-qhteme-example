import { Component } from '@angular/core';
import {QthemeService} from 'ngx-qtheme';
import {extendedLightTheme} from './theming/light.theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public theme: QthemeService) {

    this.theme.setTheme(extendedLightTheme);
    this.theme.$currentTheme.subscribe(theme => console.log(`$currentTheme:`, theme));
    this.theme.$initializedTheme.subscribe(theme => console.log(`$initializedTheme:`, theme));
  }
}
