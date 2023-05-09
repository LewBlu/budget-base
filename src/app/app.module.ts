import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { NgChartsModule } from 'ng2-charts';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './navigation/header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProfileComponent } from './authentication/profile/profile.component';
import { LoginComponent } from './authentication/login/login.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';

// import { provideFirestore, getFirestore } from '@angular/fire/firestore';

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		NavigationComponent,
		HeaderComponent,
		ProfileComponent,
		LoginComponent
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatCardModule,
		MatProgressSpinnerModule,
		MatDividerModule,
		MatListModule,
		MatIconModule,
		MatMenuModule,
		MatFormFieldModule,
		MatButtonModule,
		MatInputModule,
		NgChartsModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireAuthModule
		// provideAuth(() => getAuth()),
		// provideFirestore(() => getFirestore())
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
