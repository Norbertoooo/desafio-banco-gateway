import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {EMPTY, Observable} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ContaModel} from '../model/conta.model';
import {TransferenciaModel} from '../model/transferencia.model';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, '', {
      duration: 4000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }
  listarContas(): Observable<ContaModel[]> {
    return this.http.get<ContaModel[]>(`${environment.url}`).pipe(
      map( (obj) => obj ),
      catchError( (e) => this.errorHandler(e))
    );
  }
  criarConta(conta: ContaModel): Observable<any> {
    return this.http.post<any>(`${environment.url}`, conta).pipe(
      map( (obj) => obj ),
      catchError( (e) => this.errorHandler(e))
    );
  }
  buscarContaPorId(id: any): Observable<any>{
    return this.http.get(`${environment.url}/${id}`).pipe(
      map( (obj) => obj ),
      catchError( (e) => this.errorHandler(e))
    );
  }
  excluirConta(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.url}/${id}`).pipe(
      map( (obj) => obj ),
      catchError( (e) => this.errorHandler(e))
    );
  }
  operacaoDeSaque(contaDeDestino: number, valor: number): Observable<any> {
    const url = `${environment.url}/saques/${contaDeDestino}/${valor}`;
    return this.http.put<ContaModel>(url, null).pipe(
      map( (obj) => obj ),
      catchError( (e) => this.errorHandler(e))
    );
  }
  operacaoDeDeposito(contaDeDestino: number, valor: number): Observable<any> {
    const url = `${environment.url}/depositos/${contaDeDestino}/${valor}`;
    return this.http.put<ContaModel>(url, null).pipe(
      map( (obj) => obj ),
      catchError( (e) => this.errorHandler(e))
    );
  }
  operacaoDeTranferencia(transferenciaModel: TransferenciaModel): Observable<any> {
    const url = `${environment.url}/transferencias`;
    return this.http.put<ContaModel>(url, transferenciaModel).pipe(
      map( (obj) => obj ),
      catchError( (e) => this.errorHandler(e))
    );
  }
  errorHandler(error: HttpErrorResponse): Observable<any> {
    this.showMessage(`${error.error.erro.titulo}`, true);
    return EMPTY;
  }
}
