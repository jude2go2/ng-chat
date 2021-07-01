import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const modules: any = [];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...modules],
  exports: modules,
})
export class MaterialModule {}
