import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppConfig } from './../../app.config';
import { LanguageService } from './../../services/language.service';
import { NotFoundPageComponent } from './not-found-page.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

describe('NotFoundPageComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ],
      providers: [
        LanguageService
      ],
      declarations: [
        NotFoundPageComponent
      ]
    }).compileComponents();
  }));

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(NotFoundPageComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render not found text', async(() => {
    const fixture = TestBed.createComponent(NotFoundPageComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.not-found__title').textContent)
      .toBeDefined();
  }));
});
