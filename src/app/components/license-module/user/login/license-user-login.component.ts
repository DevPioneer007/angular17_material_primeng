import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { VerifyContentComponent } from '../../verify-content/verify-content.component';

@Component({
  selector: 'app-license-user-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatIconModule,
    NgCircleProgressModule,
    InputTextModule,
    PasswordModule,
    FormsModule,
    VerifyContentComponent
  ],
  templateUrl: './license-user-login.component.html',
})
export class LicenseUserLoginComponent implements OnInit {

  ratings = new Array(5);
  items!: any;
  username: any;
  password: any;

  constructor( ) { }

  ngOnInit(): void {
  }
}
