import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {QthemeModule} from 'ngx-qtheme';
import {darkTheme} from './theming/dark.theme';
import {extendedLightTheme} from './theming/light.theme';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    QthemeModule.config({
      initTheme: extendedLightTheme,
      themes: [
        extendedLightTheme, // extendedLightTheme is possible to use as a theme
        darkTheme
      ]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
