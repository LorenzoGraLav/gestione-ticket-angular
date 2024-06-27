import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from "@angular/core";
import {AuthService} from "./auth.service";
import {tap} from "rxjs";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if(req.url !== "http://localhost:8080/api/auth/refresh"){
    const svc = inject(AuthService)
      req = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${svc.getToken('accessToken')}`).set('Access-Control-Allow-Origin', '*/*')
      });
    return next(req).pipe(tap({
    }));
  } else {
    return next(req);
  }
};
