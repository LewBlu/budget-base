import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
	title: string = 'Chart';
	barChartData: ChartConfiguration<'bar'>['data'] = {
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		datasets: [
			{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Monthly Spending (£)', backgroundColor: '#673ab7' }
		]
	};
}