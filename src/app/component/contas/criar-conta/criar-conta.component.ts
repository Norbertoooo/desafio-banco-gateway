import { Component, OnInit } from '@angular/core';
import {ContaModel} from '../../../model/conta.model';
import {ContaService} from '../../../service/conta.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.css']
})
export class CriarContaComponent implements OnInit {

  conta: ContaModel = new ContaModel();
  constructor(private contaService: ContaService, private router: Router) { }

  ngOnInit(): void {
  }

  salvarConta() {
    return this.contaService.criarConta(this.conta)
      .subscribe(() => {
        this.contaService.showMessage('Conta cadastrada com sucesso!');
        this.router.navigate(['/contas']);
      }
    );
  }

  cancel() {
    this.router.navigate(['/contas']);
  }
}
