import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ContaModel} from '../model/conta.model';
import {TransferenciaModel} from '../model/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }
  listarContas(): Observable<ContaModel[]> {
    return this.http.get<ContaModel[]>(`${environment.url}`);
  }
  criarConta(conta: ContaModel): Observable<any> {
    return this.http.post<any>(`${environment.url}`, conta);
  }
  buscarContaPorId(id: any): Observable<any>{
    return this.http.get(`${environment.url}/${id}`);
  }
  excluirConta(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.url}/${id}`);
  }
  operacaoDeSaque(contaDeDestino: number, valor: number): Observable<ContaModel> {
    const url = `${environment.url}/saques/${contaDeDestino}/${valor}`;
    return this.http.put<ContaModel>(url, null);
  }
  operacaoDeDeposito(contaDeDestino: number, valor: number): Observable<ContaModel> {
    const url = `${environment.url}/depositos/${contaDeDestino}/${valor}`;
    return this.http.put<ContaModel>(url, null);
  }
  operacaoDeTranferenciaEntreContas(transferenciaModel: TransferenciaModel): Observable<ContaModel> {
    const url = `${environment.url}/transferencias`;
    return this.http.put<ContaModel>(url, transferenciaModel);
  }
}
