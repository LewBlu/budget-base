import { Component, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {
	private auth: Auth = inject(Auth);

	login() {

	}

}
