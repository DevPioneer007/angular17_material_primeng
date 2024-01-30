import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { LogobarComponent } from '../../../components/logobar/logobar.component';
import { LandingSidebarComponent } from '../../../components/landing-sidebar/sidebar.component';
import { StepperComponent } from '../../../components/stepper/stepper.component';
import { NewSidebarComponent } from '../../../components/new-sidebar/new-sidebar.component';

@Component({
	selector: 'app-renew-workflow',
	standalone: true,
	imports: [
		LogobarComponent,
		LandingSidebarComponent,
		CommonModule,
		RouterLink,
		RouterOutlet,
		MatIconModule,
		StepperComponent,
		NewSidebarComponent
	],
	templateUrl: './renew-workflow.component.html',
})
export class RenewWorkflowComponent implements OnInit {

	curStep: number = 1;
	items!: any;
	steps = [
    {
      id: 1,
      name: "Driller Profile Look Up"
    },
    {
      id: 2,
      name: "Details Verification"
    },
    {
      id: 3,
      name: "Payment"
    },
    {
      id: 4,
      name: "Issue License"
    }
  ]

	constructor( ) { }

	toggleCollapse(item: any) {
		item.collapsed = !item.collapsed;

	}

	toggleCheckbox(item: any) {
		item.checked = !item.checked
	}

	ngOnInit(): void {
		this.items = [
			{
				label: 'Permit & License',
				collapsible: true,
				collapsed: false,
				items: [
					{
						label: 'Driller Permit',
						checkbox: true,
						checked: false
					},
					{
						label: 'Borehole Drill Permit',
						checkbox: true,
						checked: false
					},
					{
						label: 'Microsoft',
						checkbox: true,
						checked: false
					},
					{
						label: 'MSI',
						checkbox: true,
						checked: false
					},
					{
						label: 'Lenovo',
						checkbox: true,
						checked: false
					},
					{
						label: 'Vis Alle',
						checkbox: false
					},
				]
			},
			{
				label: 'Processor',
				collapsible: true,
				collapsed: true,
				items: [
					{
						label: 'Driller Permit',
						checkbox: true,
						checked: false
					},
					{
						label: 'Borehole Drill Permit',
						checkbox: true,
						checked: false
					},
					{
						label: 'Microsoft',
						checkbox: true,
						checked: false
					},
					{
						label: 'MSI',
						checkbox: true,
						checked: false
					},
					{
						label: 'Lenovo',
						checkbox: true,
						checked: false
					},
					{
						label: 'Vis Alle',
						checkbox: false
					},
				]
			},
			{
				label: 'Harddisk Type',
				collapsible: true,
				collapsed: false,
				items: [
					{
						label: 'Driller Permit',
						checkbox: true,
						checked: false
					},
					{
						label: 'Borehole Drill Permit',
						checkbox: true,
						checked: false
					},
					{
						label: 'Microsoft',
						checkbox: true,
						checked: false
					},
					{
						label: 'MSI',
						checkbox: true,
						checked: false
					},
					{
						label: 'Lenovo',
						checkbox: true,
						checked: false
					},
					{
						label: 'Vis Alle',
						checkbox: false
					},
				]
			},
		];
		// this.sidebarToggleService.hide();
	}
}
