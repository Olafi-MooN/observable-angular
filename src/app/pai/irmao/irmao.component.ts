import { Component, OnInit } from '@angular/core';
import { ObservableService } from 'src/app/services/observable.service';

@Component({
  selector: 'app-irmao',
  templateUrl: './irmao.component.html',
  styleUrls: ['./irmao.component.css']
})
export class IrmaoComponent implements OnInit {
  public title: string = 'Irmão';
  public descricao: string = 'Sou o componente ' + this.title;
  public dados: string = '';

  constructor(private observable: ObservableService) {
    this.observable.dados.subscribe(observer => {
      this.dados = observer;
    })
  }

  public mudarEstadoObservable(): void {
    this.observable.setDados(this.descricao)
  }
  
  ngOnInit(): void {
  }

}
