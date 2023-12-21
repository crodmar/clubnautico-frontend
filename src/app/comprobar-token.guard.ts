import { CanActivateFn } from '@angular/router';

export const comprobarTokenGuard: CanActivateFn = (route, state) => {
  return localStorage.getItem("token") != null;
};
