import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserContactsComponent } from './items/about/user-contacts/user-contacts.component';
import { UserInfoComponent } from './items/about/user-info/user-info.component';
import { DisplayListComponent } from './items/display/display-list/display-list.component';

const routes: Routes = [
  
  {path: 'projects', component: DisplayListComponent},
  {path: 'contacts', component: UserContactsComponent},
  {path: 'about', component: UserInfoComponent},
  {path: '', component: DisplayListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
