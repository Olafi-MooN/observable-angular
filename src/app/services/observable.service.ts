import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  public dados: Subject<string> = new Subject<string>();

  public setDados(dados: string) { 
    this.dados.next(dados);
  }

  public getDados()  {
    this.dados.asObservable()
  }

  constructor() { }
}
