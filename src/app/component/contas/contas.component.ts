import { Component, OnInit } from '@angular/core';
import {ContaModel} from '../../model/conta.model';
import {ContaService} from '../../service/conta.service';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.css']
})
export class ContasComponent implements OnInit {

  contas: ContaModel[];
  displayedColumns = ['numeroDaConta', 'nome', 'cpf', 'saldo', 'acoes'];
  constructor(private contaService: ContaService) { }

  ngOnInit(): void {
    this.listasContas();
  }
  listasContas() {
    return this.contaService.listarContas()
      .subscribe( contas => this.contas = contas);
  }
}
