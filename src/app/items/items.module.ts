import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayCardComponent } from './display/display-card/display-card.component';
import { DisplayListComponent } from './display/display-list/display-list.component';
import { UserInfoComponent } from './about/user-info/user-info.component';
import { UserContactsComponent } from './about/user-contacts/user-contacts.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    DisplayCardComponent,
    DisplayListComponent,
    UserInfoComponent,
    UserContactsComponent,  
  ],
  imports: [
    CommonModule,
    AppRoutingModule,    
  ],
  exports:[
    DisplayCardComponent,
    DisplayListComponent,
    UserInfoComponent,
  ]
})
export class ItemsModule { }
