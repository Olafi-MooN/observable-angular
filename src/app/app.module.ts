import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaiComponent } from './pai/pai.component';
import { FilhoComponent } from './pai/filho/filho.component';
import { IrmaoComponent } from './pai/irmao/irmao.component';

@NgModule({
  declarations: [
    AppComponent,
    PaiComponent,
    FilhoComponent,
    IrmaoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
