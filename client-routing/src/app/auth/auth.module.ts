import { CommonModule } from "@angular/common";
import { Component, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AuthRoutingModule } from "./auth-routing.module";
import { CalisComponent } from "../components/calis/calis.component";
import { LoginComponent } from "../components/login/login.component";

@NgModule({
    declarations: [CalisComponent, LoginComponent],
    imports: [CommonModule, FormsModule, AuthRoutingModule, HttpClientModule]
})

export class AuthModule {

}