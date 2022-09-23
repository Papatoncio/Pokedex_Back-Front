import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CalisComponent } from "../components/calis/calis.component";
import { LoginComponent } from "../components/login/login.component";

const routes:Routes = [
    {path: 'resgistro', component:CalisComponent},
    {path: 'login', component:LoginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}