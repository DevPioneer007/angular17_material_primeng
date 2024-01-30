import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch, HttpClient } from '@angular/common/http';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgCircleProgressModule, CircleProgressOptions } from 'ng-circle-progress';
import { FormsModule } from '@angular/forms';

export function CircleProgressOptionsFactory(): any {
  return {
    // Your ng-circle-progress options here
    // Example:
    percent: 75,
    title: "121 Days",
    showInnerStroke: false,
    radius: 100,
    outerStrokeWidth: 16,
    outerStrokeColor: "#0C",
    innerStrokeColor: "#C7E596",
    animationDuration: 300,
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
    provideHttpClient(withFetch()), { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: CircleProgressOptions, useFactory: CircleProgressOptionsFactory },
    FormsModule
  ]
};
