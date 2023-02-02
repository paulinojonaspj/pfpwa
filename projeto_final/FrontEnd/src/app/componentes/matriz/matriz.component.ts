import { Component, OnInit } from '@angular/core';
import { AutorizacaoService } from 'src/app/services/autorizacao.service';

@Component({
  selector: 'app-matriz',
  templateUrl: './matriz.component.html',
  styleUrls: ['./matriz.component.css']
})
export class MatrizComponent implements OnInit {


  constructor(private autorizacao: AutorizacaoService) { }
  randomInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  simbolos: [string, string] = ["O", "X"];
  nGerado: number = this.randomInt(0, 1);
  simbolo = this.simbolos[this.nGerado];
  concluido: boolean = false;
  msgSucesso: string = "";
  msgErro: string = "";
  computador: boolean = true;
  bloqueado = false;
  jogador = this.autorizacao.getSessaoNome();
  email = this.autorizacao.getSessaoEmail();
  ngOnInit(): void {
    this.jogarComputador();
  }
  casas: string[] = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];

  jogar(i: number): void {
    if (!this.concluido && this.bloqueado == false) {
      this.bloqueado = true;
      if (this.casas[i] === "-") {
        this.nGerado = this.nGerado == 1 ? 0 : 1;
        this.simbolo = this.simbolos[this.nGerado];
        this.casas[i] = this.simbolos[this.nGerado == 1 ? 0 : 1];
        this.msgErro = "";

        this.computador = false;
        if (this.verificarJogada(i)) {
          this.msgErro = "Jogador " + this.casas[i] + " Ganhou o Jogo.";
          this.concluido = true;
        }

        if (!this.concluido) {
          setTimeout(() => this.jogarComputador(), 1000);
        }

      } else {
        this.msgErro = "Não é possível jogar em casa ocupada.";
        this.bloqueado = false;
      }

    }
  }

  jogarComputador(): void {
    this.computador = true;

    var indice = this.randomInt(0, 8);
    if (this.simbolo == "O") {

      if (this.casas[indice] != "-") {
        return this.jogarComputador();
      } else {
        this.casas[indice] = this.simbolo;
        this.nGerado = this.nGerado == 1 ? 0 : 1;

        if (this.verificarJogada(indice)) {
          this.msgErro = "Jogador " + this.casas[indice] + " Ganhou o Jogo.";
          this.concluido = true;
        }
      }

    }

    if (this.verificarJogada(indice)) {
      this.msgErro = "Jogador O Ganhou o Jogo.";
      this.concluido = true;
    }
    this.simbolo = "X";
    this.bloqueado = false;
  }

  logout() {
    this.autorizacao.terminar();
  }

  verificarJogada(i: number): Boolean {

    var simbolo = this.simbolos[this.nGerado == 1 ? 0 : 1];

    if (this.computador) {
      simbolo = "O";
    }

    if (!this.casas.includes("-")) {
      this.msgErro = "Jogo Empate";
      this.concluido = true;
    }


    if (i == 0) {
      if (
        (this.casas[1] == simbolo && this.casas[2] == simbolo)
        || (this.casas[4] == simbolo && this.casas[8] == simbolo)
        || (this.casas[3] == simbolo && this.casas[6] == simbolo)
      ) {
        return true;
      }

    } else if (i == 1) {

      if (
        (this.casas[0] == simbolo && this.casas[2] == simbolo)
        || (this.casas[4] == simbolo && this.casas[7] == simbolo)

      ) {
        return true;
      }
    } else if (i == 2) {

      if (
        (this.casas[0] == simbolo && this.casas[1] == simbolo)
        || (this.casas[4] == simbolo && this.casas[6] == simbolo)
        || (this.casas[5] == simbolo && this.casas[8] == simbolo)
      ) {
        return true;
      }
    } else if (i == 3) {

      if (
        (this.casas[0] == simbolo && this.casas[6] == simbolo)
        || (this.casas[4] == simbolo && this.casas[5] == simbolo)

      ) {
        return true;
      }
    } else if (i == 4) {

      if (
        (this.casas[3] == simbolo && this.casas[5] == simbolo)
        || (this.casas[0] == simbolo && this.casas[8] == simbolo)
        || (this.casas[2] == simbolo && this.casas[6] == simbolo)
      ) {
        return true;
      }
    }
    else if (i == 5) {

      if (
        (this.casas[2] == simbolo && this.casas[8] == simbolo)
        || (this.casas[3] == simbolo && this.casas[4] == simbolo)

      ) {
        return true;
      }
    }
    else if (i == 6) {

      if (
        (this.casas[0] == simbolo && this.casas[3] == simbolo)
        || (this.casas[7] == simbolo && this.casas[8] == simbolo)
        || (this.casas[4] == simbolo && this.casas[2] == simbolo)
      ) {
        return true;
      }
    } else if (i == 7) {

      if (
        (this.casas[6] == simbolo && this.casas[8] == simbolo)
        || (this.casas[4] == simbolo && this.casas[1] == simbolo)

      ) {
        return true;
      }
    }
    else if (i == 8) {

      if (
        (this.casas[6] == simbolo && this.casas[7] == simbolo)
        || (this.casas[2] == simbolo && this.casas[5] == simbolo)
        || (this.casas[0] == simbolo && this.casas[4] == simbolo)
      ) {
        return true;
      }
    }
    return false;
  }

}
