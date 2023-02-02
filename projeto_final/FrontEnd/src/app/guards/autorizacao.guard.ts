import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutorizacaoService } from '../services/autorizacao.service';

@Injectable({
  providedIn: 'root'
})
export class AutorizacaoGuard implements CanActivate {
  constructor(private autorizacaoService: AutorizacaoService, private routas: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.autorizacaoService.getAutorizacao()) {
      return true;
    }
    return this.routas.navigate([""]);
  }

}
