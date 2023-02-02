import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutorizacaoService {

  constructor(private router: Router) { }

  autorizar() {
    localStorage.setItem("sessao", "true");
  }


  sessaoNome(nome: string) {
    localStorage.setItem("sessaoNome", nome);
  }

  getSessaoNome() {
    return localStorage.getItem("sessaoNome");
  }

  sessaoEmail(email: string) {
    return localStorage.setItem("sessaoEmail", email);
  }

  getSessaoEmail() {
    return localStorage.getItem("sessaoEmail");
  }

  terminar() {
    localStorage.clear();
    this.router.navigate([""]);
  }

  getAutorizacao = () => !!localStorage.getItem("sessao");


}
