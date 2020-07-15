import { Component, OnInit } from '@angular/core';
import {ContaService} from '../../../service/conta.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sacar',
  templateUrl: './sacar.component.html',
  styleUrls: ['./sacar.component.css']
})
export class SacarComponent implements OnInit {

  contaDestino: number;
  valor: number;
  constructor(private contaService: ContaService, private router: Router) { }

  ngOnInit(): void {
  }

  sacar() {
    this.contaService.operacaoDeSaque(this.contaDestino, this.valor)
      .subscribe( () => {
        this.contaService.showMessage('Operacao de saque realizada com sucesso');
        this.router.navigate(['/contas']);
        }
      );
  }

  cancel() {
    this.router.navigate(['/contas']);
  }
}
