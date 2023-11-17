import { CanDeactivateFn } from '@angular/router';

export const formDeactivateGuard: CanDeactivateFn<unknown> = (component : any, currentRoute, currentState, nextState) => {
  console.log(component);
  if(component.credForm){
    const confirmation = confirm("are u sure u want to navigate?");
    if(confirmation) {
      return true;
    } else {
      return false;
    }
  }
  if(component.contactForm){
    const confirmation1 = confirm("are u sure u want to navigate?");
    if(confirmation1){
      return true;
    } else {
      return false;
    }
  }
  return true;
};
