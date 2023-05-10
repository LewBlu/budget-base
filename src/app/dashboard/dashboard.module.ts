import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

// Custom Components
import { DashboardComponent } from "./dashboard.component";

// Angular Material imports
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatOptionModule } from "@angular/material/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { NgChartsModule } from "ng2-charts";

const routes: Routes = [
	{ path: '', component: DashboardComponent }
];

@NgModule({
	declarations: [DashboardComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forChild(routes),
		NgChartsModule,
		// Angular Material imports
		MatCardModule,
		MatProgressSpinnerModule,
		MatDividerModule,
		MatListModule,
		MatInputModule,
		MatSelectModule,
		MatOptionModule,
		MatDialogModule,
		MatFormFieldModule,
	],
	exports: [RouterModule]
})

export class DashboardModule { }