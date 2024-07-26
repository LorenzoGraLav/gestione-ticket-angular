import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from "@angular/core";
import {AuthService} from "./auth.service";
import {tap} from "rxjs";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const svc = inject(AuthService);

  if (req.url !== 'http://localhost:44311/api/auth/refresh') {
    if (svc.isTokenExpired()) {
      svc.Logout();
      return next(req); // Abort the request since the token is expired
    }

    req = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${svc.getToken('accessToken')}`).set('Access-Control-Allow-Origin', '*/*')
    });
  }return next(req).pipe(
    tap({
      error: err => {
        if (err.status === 401) {
          svc.Logout();
        }
      }
    })
  );
};
