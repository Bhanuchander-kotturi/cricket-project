import { inject } from '@angular/core';
import { CanActivateFn,Router } from '@angular/router';

export const searchguardGuard: CanActivateFn = (route, state) => {

  const isLogin = sessionStorage.getItem('isLoggedIn');
  const router = inject(Router);

  if(isLogin) {
    return true;
  } else {
    router.navigate(['login'])
    return false;
  }
};
