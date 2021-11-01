import { Component, OnInit } from "@angular/core";
import { ObservableService } from "../services/observable.service";

@Component({
  selector: "app-pai",
  templateUrl: "./pai.component.html",
  styleUrls: ["./pai.component.css"]
})
export class PaiComponent implements OnInit {
  public title: string = "Componente Pai";
  public descricao: string = "Conteúdo da div pai";
  public dados: string =  '';

  constructor(private observableService: ObservableService) {
    this.observableService.dados.subscribe(observer => this.dados = observer);
  }

  ngOnInit(): void {}
}
