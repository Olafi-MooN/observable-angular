import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';    
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaiComponent } from './components/observable/pai.component';
import { FilhoComponent } from './components/observable/filho/filho.component';
import { IrmaoComponent } from './components/observable/irmao/irmao.component';
import { ReactiveFormComponent } from './components/formulario/reactive-form/reactive-form.component';
import { SidebarRightComponent } from './components/sidebar-right/sidebar-right.component';

@NgModule({
  declarations: [
    AppComponent,
    PaiComponent,
    FilhoComponent,
    IrmaoComponent,
    ReactiveFormComponent,
    SidebarRightComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
