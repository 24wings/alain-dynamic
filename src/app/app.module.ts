import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlainDynamicModuleModule } from 'alain-dynamic-module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AlainDynamicModuleModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
