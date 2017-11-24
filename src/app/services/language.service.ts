import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { AppConfig } from '../app.config';

@Injectable()
export class LanguageService {
  private promiseCurrentLang: Promise<string>;

  constructor(
    private translate: TranslateService
  ) { }

  // Gets the current used language
  getCurrentLang(): Promise<string> {
    return this.promiseCurrentLang;
  }

  // Return the preferred user language, not necessarily the used
  getUserPreferredLanguage(): Promise<string> {
    return this.getLangUserBrowser();
  }

  // We retrieve and check user preferred language, we use it if is available
  initLanguage() {
    this.setDefaultLang();
    this.promiseCurrentLang = this.setUserLang();
  }

  private setDefaultLang() {
    this.translate.setDefaultLang(AppConfig.i18n.default);
  }

  // Sets the current language to preferred (if available) or default
  private setLang(prefLangCode: string): string {
    let currentLang = AppConfig.i18n.default;

    if (AppConfig.i18n.active.find((lang: string) => lang === prefLangCode)) {
      this.translate.use(prefLangCode);
      currentLang = prefLangCode;
    }

    return currentLang;
  }

  private getLangUserBrowser(): Promise<string> {
    return new Promise<string>((resolve: any, reject: any) => {
      resolve(this.translate.getBrowserLang());
    });
  }

  private setUserLang(): Promise<string> {
    return this.setLangForUserBrowser();
  }

  private setLangForUserBrowser(): Promise<string> {
    return this.getLangUserBrowser().
      then((prefLang: string) => this.setLang(prefLang));
  }

}
