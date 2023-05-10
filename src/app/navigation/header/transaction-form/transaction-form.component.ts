import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-transaction-form',
	templateUrl: './transaction-form.component.html',
	styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent {
	transactionForm = new FormGroup({
		transaction: new FormControl('', Validators.required),
		category: new FormControl('', Validators.required),
		amount: new FormControl('', Validators.required)
	});

	onSubmit() {
		console.log(this.transactionForm.value);
	}
}
