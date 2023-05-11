import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {
	constructor(private auth: AngularFireAuth, private router: Router) { }
	showError: boolean = false;
	loginForm = new FormGroup({
		email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
		password: new FormControl('', { nonNullable: true, validators: [Validators.required] })
	});

	onLogin() {
		if (this.loginForm.valid) {
			const email = this.loginForm.get('email')!.value;
			const password = this.loginForm.get('password')!.value;
			this.auth.signInWithEmailAndPassword(email, password).then(userCred => {
				this.router.navigate(['/']);
			}).catch(error => this.showError = true);
		}
	}
}
