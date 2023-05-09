import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './authentication/profile/profile.component';
import { LoginComponent } from './authentication/login/login.component';

const routes: Routes = [
	{ path: '', component: DashboardComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'profile', component: ProfileComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
