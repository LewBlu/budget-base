import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';


@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	constructor(private auth: AngularFireAuth, private router: Router, private dialog: MatDialog) { }

	onSignOut() {
		this.auth.signOut().then(() => {
			this.router.navigate(['/login']);
		}).catch(error => console.log('An error has occured:', error));
	}

	// Display the transaction dialog when option selected from navbar
	openTransactionDialog() {
		this.dialog.open(TransactionFormComponent);
	}
}
