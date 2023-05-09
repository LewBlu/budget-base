import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	constructor(private auth: AngularFireAuth, private router: Router) { }

	onSignOut() {
		this.auth.signOut().then(() => {
			this.router.navigate(['/login']);
		}).catch(error => console.log('An error has occured:', error));
	}
}
