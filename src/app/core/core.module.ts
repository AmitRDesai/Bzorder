import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DatabaseService } from './database.service';
import { DropDownDirective } from './drop-down.directive';
import { CoreService } from './core.service';
import { ArrayPipe } from './array.pipe';
import { ContainsPipe } from './contains.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [DropDownDirective, ArrayPipe, ContainsPipe],
  providers: [DatabaseService, CoreService],
  exports:[DropDownDirective, ArrayPipe, ContainsPipe]
})
export class CoreModule { }
