import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DatabaseService } from './database.service';
import { DropDownDirective } from './drop-down.directive';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [DropDownDirective],
  providers: [DatabaseService],
  exports:[DropDownDirective]
})
export class CoreModule { }
