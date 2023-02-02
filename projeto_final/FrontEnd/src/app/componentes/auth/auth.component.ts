import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interfaces/User';
import { AutorizacaoService } from 'src/app/services/autorizacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  registarForm!: FormGroup;
  loginForm!: FormGroup;
  mensagem = "";
  tipoMensagem = "";


  constructor(private authService: AuthService, private autorizacao: AutorizacaoService, private router: Router) { }
  public users: User[] = [];
  ngOnInit(): void {
    this.registarForm = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      palavrapasse: new FormControl('', [Validators.required]),
      cpalavrapasse: new FormControl('', [Validators.required]),
    });

    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      pw: new FormControl('', [Validators.required]),
    });

  }


  get username() {
    return this.loginForm.get("username")!;
  }
  get pw() {
    return this.loginForm.get("pw")!;
  }

  get nome() {
    return this.registarForm.get("nome")!;
  }
  get email() {
    return this.registarForm.get("email")!;
  }
  get palavrapasse() {
    return this.registarForm.get("palavrapasse")!;
  }
  get cpalavrapasse() {
    return this.registarForm.get("cpalavrapasse")!;
  }
  async submitRegistar() {
    if (this.registarForm.invalid) {
      return;
    }

    const value = this.registarForm.value;

    this.authService.vEmail(value.email).subscribe(async (data: User) => {
      if (data && value.email == data.email) {
        this.mensagem = "O email já está registado";
        this.tipoMensagem = "erro";
      } else if (value.palavrapasse != value.cpalavrapasse) {
        this.mensagem = "Palavra-passe de confirmação não pode ser diferente";
        this.tipoMensagem = "erro";
      } else {
        await this.authService.registarUser({ "nome": value.nome, "email": value.email, "palavrapasse": value.palavrapasse }).subscribe();
        this.mensagem = "Bem-vindo";
        this.tipoMensagem = "sucesso";
        this.autorizacao.autorizar();
        this.autorizacao.sessaoNome(value.nome);
        this.autorizacao.sessaoEmail(value.email);
        this.router.navigate(["/jogar"])
      }

    });


  }

  async submitLogin() {
    if (this.loginForm.invalid) {
      return;
    }
    var dados = this.loginForm.value;
    this.authService.login(dados.username, dados.pw).subscribe((data: User) => {
      if (data && dados.username == data.email && dados.pw == data.palavrapasse) {
        this.mensagem = "Login feito com sucesso";
        this.autorizacao.sessaoNome(data.nome);
        this.autorizacao.sessaoEmail(data.email);

        this.tipoMensagem = "sucesso";
        this.autorizacao.autorizar();
        this.router.navigate(["/jogar"])
      } else {
        this.mensagem = "Sem permissão";
        this.tipoMensagem = "erro";
      }

    });
  }

}
