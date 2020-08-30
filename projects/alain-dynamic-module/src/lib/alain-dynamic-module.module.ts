import { NgModule } from '@angular/core';
import { AlainDynamicModuleComponent } from './alain-dynamic-module.component';

console.log(`alain dynamic module`)

@NgModule({
  declarations: [AlainDynamicModuleComponent],
  imports: [
  ],
  exports: [AlainDynamicModuleComponent]
})
export class AlainDynamicModuleModule { }
