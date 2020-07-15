import { Component, OnInit } from '@angular/core';
import {TransferenciaModel} from '../../../model/transferencia.model';
import {Router} from '@angular/router';
import {ContaService} from '../../../service/conta.service';

@Component({
  selector: 'app-transferir',
  templateUrl: './transferir.component.html',
  styleUrls: ['./transferir.component.css']
})
export class TransferirComponent implements OnInit {

  transferenciaModel: TransferenciaModel = new TransferenciaModel();
  constructor(private router: Router, private contaService: ContaService) { }

  ngOnInit(): void {
  }
  transferir() {
    this.contaService.operacaoDeTranferenciaEntreContas(this.transferenciaModel)
      .subscribe( () => {
        this.contaService.showMessage('operação de tranferencia realizada com sucesso');
        this.router.navigate(['/contas']);
      });
  }
  cancelar() {
    this.router.navigate(['contas']);
  }
}
