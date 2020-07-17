import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContaService} from '../../../service/conta.service';
import {ContaModel} from '../../../model/conta.model';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit {
  conta: ContaModel = new ContaModel();
  constructor(private router: Router,
              private contaService: ContaService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.contaService.buscarContaPorId(id).subscribe( conta =>
    this.conta = conta);
  }
  cancelar() {
    this.router.navigate(['/contas']);
  }
  excluir() {
    this.contaService.excluirConta(this.conta.id)
      .subscribe(() => {
        this.contaService.showMessage('Conta Excluida com sucesso!');
        this.router.navigate(['/contas']);
      });
  }

}
