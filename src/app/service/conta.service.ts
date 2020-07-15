import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ContaModel} from '../model/conta.model';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }
  listarContas(): Observable<ContaModel[]> {
    return this.http.get<ContaModel[]>(`${environment.url}`);
  }
  criarConta(conta: ContaModel): Observable<ContaModel> {
    return this.http.post<ContaModel>(`${environment.url}`, conta);
  }
  operacaoDeSaque(contaDeDestino: number, valor: number): Observable<ContaModel> {
    const url = `${environment.url}/saques/${contaDeDestino}/${valor}`;
    return this.http.put<ContaModel>(url, null);
  }
  operacaoDeDeposito(contaDeDestino: number, valor: number): Observable<ContaModel> {
    const url = `${environment.url}/depositos/${contaDeDestino}/${valor}`;
    return this.http.put<ContaModel>(url, null);
  }
  operacaoDeDepositoEntreContas(contaDeDestino: number, valor: number): Observable<ContaModel> {
    const url = `${environment.url}/depositos`;
    return this.http.put<ContaModel>(url, null);
  }
}