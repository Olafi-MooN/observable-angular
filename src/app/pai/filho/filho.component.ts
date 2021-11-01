import { Component, OnInit } from "@angular/core";
import { ObservableService } from "src/app/services/observable.service";

@Component({
  selector: "app-filho",
  templateUrl: "./filho.component.html",
  styleUrls: ["./filho.component.css"]
})
export class FilhoComponent implements OnInit {
  public title: string = "Filho";
  public descricao: string = "Sou um Componente "+ this.title;
  public dados: string = '';

  constructor(private observable: ObservableService) {
    this.observable.dados.subscribe(observer => {
      this.dados = observer;
    })
  }

  public mudarEstadoObservable(): void { 
    this.observable.setDados(this.descricao)
  }

  ngOnInit(): void {}
}
