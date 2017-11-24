import { Component } from '@angular/core';

import { LanguageService } from './services/language.service';
import { AppConfig } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  apiUrl: string;

  constructor(
    private languageService: LanguageService,
  ) {
    this.languageService.initLanguage();
    this.apiUrl = AppConfig.environment.apiURL;
  }

}
