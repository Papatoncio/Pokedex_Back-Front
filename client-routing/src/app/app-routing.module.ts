import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CalisComponent } from './components/calis/calis.component';

const routes: Routes = [
  {path:'registro', component:LoginComponent},
  {path:'login', component:CalisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
