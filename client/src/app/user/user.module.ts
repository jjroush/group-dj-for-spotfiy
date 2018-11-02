import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinComponent } from './join/join.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [JoinComponent]
})
export class UserModule { }
