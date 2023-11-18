import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { AdminServiceService } from '../services/admin-service.service';

export const resolveGuard: ResolveFn<any> = (route, state) => {
  const adminService = inject(AdminServiceService);
  return adminService.viewPlayers();
};
