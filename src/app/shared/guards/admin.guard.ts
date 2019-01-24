import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'app/shared/services/token-storage.service';
import { ToastaService } from 'ngx-toasta';
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private tokenStorage: TokenStorageService,
    private toastr: ToastaService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.tokenStorage.getAuthorities().includes('ADMIN')) {
          return true;
      } else {
        this.toastr.error('You do not Have Admin rights');
        return false;
      }
  }
}
