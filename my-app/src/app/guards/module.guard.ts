import { CanMatchFn } from '@angular/router';

export const moduleGuard: CanMatchFn = (route, segments) => {
  const role = sessionStorage.getItem('role');
  if(role === 'player') {
    return false;
  } else {
    return true;
  }
  
};
