import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { NgChartsModule } from 'ng2-charts';
import { environment } from '../environments/environment';

// Custom Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProfileComponent } from './authentication/profile/profile.component';
import { TransactionFormComponent } from './navigation/header/transaction-form/transaction-form.component';

// Angular Material Imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
	declarations: [
		AppComponent,
		NavigationComponent,
		HeaderComponent,
		ProfileComponent,
		TransactionFormComponent
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		NgChartsModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireAuthModule,
		// Angular Material Components
		MatSelectModule,
		MatFormFieldModule,
		MatToolbarModule,
		MatCardModule,
		MatIconModule,
		MatMenuModule,
		MatButtonModule,
		MatDialogModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
