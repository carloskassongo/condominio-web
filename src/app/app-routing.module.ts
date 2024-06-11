import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './module/login/login.component';
import { RegisterComponent } from './module/register/register.component';
import { PagesComponent } from './view/pages/pages.component';
import { CCobrancaComponent } from './container/c-cobranca/c-cobranca.component';
import { CMoradiaComponent } from './container/c-moradia/c-moradia.component';
import { CMovimentoComponent } from './container/c-movimento/c-movimento.component';
import { MovimentoComponent } from './container/movimento/movimento.component';
import { CobrancaComponent } from './container/cobranca/cobranca.component';
import { PCondominioComponent } from './container/p-condominio/p-condominio.component';

const routes: Routes = [
{path: '', component: LoginComponent},
{path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent},
{path: 'pages', component: PagesComponent, children:[
  {path: '', component: PCondominioComponent},
  {path: 'p_condominio', component: PCondominioComponent},
  {path: 'c_cobranca', component: CCobrancaComponent},
  {path: 'c_moradia', component: CMoradiaComponent},
  {path: 'c_movimento', component: CMovimentoComponent},
  {path: 'movimento', component: MovimentoComponent},
  {path: 'cobranca', component: CobrancaComponent}
]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
