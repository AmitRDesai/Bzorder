import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DatabaseService } from './database.service';
import { CoreService } from './core.service';
import { ArrayPipe } from './array.pipe';
import { CartService } from './cart.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [ArrayPipe],
  providers: [DatabaseService, CoreService, CartService],
  exports:[ArrayPipe]
})
export class CoreModule { }
