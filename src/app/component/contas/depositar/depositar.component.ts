import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ContaService} from '../../../service/conta.service';

@Component({
  selector: 'app-depositar',
  templateUrl: './depositar.component.html',
  styleUrls: ['./depositar.component.css']
})
export class DepositarComponent implements OnInit {

  contaDestino: number;
  valor: number;

  constructor(private router: Router, private contaService: ContaService) { }

  ngOnInit(): void {
  }

  cancelar() {
    this.router.navigate(['/contas']);
  }

  depositar() {
    this.contaService.operacaoDeDeposito(this.contaDestino, this.valor)
      .subscribe(() => {
        this.contaService.showMessage('Operação de deposito realizada com sucesso');
        this.router.navigate(['/contas']);
      });
  }
}
