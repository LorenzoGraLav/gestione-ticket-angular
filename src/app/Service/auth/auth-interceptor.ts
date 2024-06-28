import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from "@angular/core";
import {AuthService} from "./auth.service";
import {tap} from "rxjs";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if(req.url !== "http://localhost:44311/api/auth/refresh"){

      const svc = inject(AuthService)
        req = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${svc.getToken('accessToken')}`).set('Access-Control-Allow-Origin', '*/*')

        });
      console.log("entra",req)
      return next(req).pipe(tap({
      }));
  } else {
    return next(req);
  }
};
