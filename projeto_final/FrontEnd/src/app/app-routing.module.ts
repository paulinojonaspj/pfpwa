import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './componentes/auth/auth.component';
import { MatrizComponent } from './componentes/matriz/matriz.component';
import { AutorizacaoGuard } from './guards/autorizacao.guard';
import { VautorizacaoGuard } from './guards/vautorizacao.guard';
const routes: Routes = [
  { path: '', component: AuthComponent, canActivate:[VautorizacaoGuard] },
  { path: 'jogar', component: MatrizComponent, canActivate: [AutorizacaoGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
