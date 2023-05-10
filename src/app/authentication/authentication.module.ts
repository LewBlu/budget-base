import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Custom Components
import { LoginComponent } from "./login/login.component";

// Angular Material Imports
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

const routes: Routes = [
	{ path: '', component: LoginComponent }
];

@NgModule({
	declarations: [LoginComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		FormsModule,
		ReactiveFormsModule,
		//Angular Material Components
		MatFormFieldModule,
		MatCardModule,
		MatInputModule,
		MatButtonModule
	],
	exports: [RouterModule]
})

export class AuthenticationModule { }