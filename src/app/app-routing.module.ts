import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {ContasComponent} from './component/contas/contas.component';
import {CriarContaComponent} from './component/contas/criar-conta/criar-conta.component';
import {SacarComponent} from './component/contas/sacar/sacar.component';
import {DepositarComponent} from './component/contas/depositar/depositar.component';
import {TransferirComponent} from './component/contas/transferir/transferir.component';
import {ExcluirComponent} from './component/contas/excluir/excluir.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contas',
    component: ContasComponent
  },
  {
    path: 'criar-conta',
    component: CriarContaComponent
  },
  {
    path: 'sacar',
    component: SacarComponent
  },
  {
    path: 'depositar',
    component: DepositarComponent
  },
  {
    path: 'transferir',
    component: TransferirComponent
  },
  {
    path: 'excluir/:id',
    component: ExcluirComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
