import {CanActivateFn, Router} from "@angular/router";
import {inject} from "@angular/core";
import {AuthService} from "./auth.service";

export const authGuard: CanActivateFn = (route, state) => {
  const authSvc = inject(AuthService);
  const router = inject(Router)
  if (authSvc.isUserLogged()) {
    return true;
  } else {
    console.log("token expired")
    router.navigateByUrl("/login")
      .then(() => localStorage.removeItem('accessToken'));
    return false;
  }
};
