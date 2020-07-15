import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {ContasComponent} from './component/contas/contas.component';
import {CreateComponent} from './component/contas/create/create.component';
import {SacarComponent} from './component/contas/sacar/sacar.component';
import {DepositarComponent} from './component/contas/depositar/depositar.component';


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
    component: CreateComponent
  },
  {
    path: 'sacar',
    component: SacarComponent
  }
  ,
  {
    path: 'depositar',
    component: DepositarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
