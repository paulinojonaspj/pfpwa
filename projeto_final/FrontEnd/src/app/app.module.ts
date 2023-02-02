import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatrizComponent } from './componentes/matriz/matriz.component';
import { AuthComponent } from './componentes/auth/auth.component';
import { MensagemComponent } from './componentes/mensagem/mensagem.component';

@NgModule({
  declarations: [
    AppComponent,
    MatrizComponent,
    AuthComponent,
    MensagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
