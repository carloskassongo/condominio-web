import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './module/login/login.component';
import { RegisterComponent } from './module/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './widgets/header/header.component';
import { MenuComponent } from './widgets/menu/menu.component';
import { PainelCondominioComponent } from './view/painel-condominio/painel-condominio.component';
import { PCondominioComponent } from './container/p-condominio/p-condominio.component';
import { CadastroMoradiaComponent } from './view/cadastro-moradia/cadastro-moradia.component';
import { CMoradiaComponent } from './container/c-moradia/c-moradia.component';
import { CCobrancaComponent } from './container/c-cobranca/c-cobranca.component';
import { CobrancaComponent } from './container/cobranca/cobranca.component';
import { CMovimentoComponent } from './container/c-movimento/c-movimento.component';
import { MovimentoComponent } from './container/movimento/movimento.component';
import { PagesComponent } from './view/pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    MenuComponent,
    PainelCondominioComponent,
    PCondominioComponent,
    CadastroMoradiaComponent,
    CMoradiaComponent,
    CCobrancaComponent,
    CobrancaComponent,
    CMovimentoComponent,
    MovimentoComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
