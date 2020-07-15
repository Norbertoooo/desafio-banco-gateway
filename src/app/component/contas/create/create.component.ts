import { Component, OnInit } from '@angular/core';
import {ContaModel} from '../../../model/conta.model';
import {ContaService} from '../../../service/conta.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  conta: ContaModel = new ContaModel();
  constructor(private contaService: ContaService, private router: Router) { }

  ngOnInit(): void {
  }

  salvarConta() {
    console.log(this.conta);
    return this.contaService.criarConta(this.conta)
      .subscribe(() => {
        this.contaService.showMessage('Conta criada com sucesso');
        this.router.navigate(['/contas']);
      }
    );
  }

  cancel() {
    this.router.navigate(['/contas']);
  }
}
