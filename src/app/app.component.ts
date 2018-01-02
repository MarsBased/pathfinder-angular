import { Component } from '@angular/core';

import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {

  constructor(
    private languageService: LanguageService
  ) {
    this.languageService.initLanguage();
  }

}
