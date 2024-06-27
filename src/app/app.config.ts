import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {LayoutService} from "./Service/layout.service";
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptors} from "@angular/common/http";
// import {mioInterceptroInterceptor} from "./Service/auth/mio-interceptro.interceptor";
import {AuthService} from "./Service/auth/auth.service";
import {AreaService} from "./Service/area.service";
import {loggingInterceptor} from "./Service/auth/login.interceptor";
import {authInterceptor} from "./Service/auth/auth-interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([authInterceptor, loggingInterceptor])),
    provideRouter(routes),
    provideAnimationsAsync(),
    LayoutService,
    AuthService,
    AreaService, provideAnimationsAsync('noop'),
    // {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
// provideHttpClient(withInterceptors([AuthInterceptor]))
  ]
};
