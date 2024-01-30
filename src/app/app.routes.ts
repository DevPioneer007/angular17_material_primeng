import { Routes } from '@angular/router';
import { AccountLookupComponent } from './components/driller-registration/account/account-lookup/account-lookup.component';
import { AccountValidateComponent } from './components/driller-registration/account/account-validate/account-validate.component';
import { DrillerRegistrationAccountComponent } from './components/driller-registration/account/account.component';
import { PaymentCompleteComponent } from './components/driller-registration/payment/payment-complete/payment-complete.component';
import { PaymentConfirmComponent } from './components/driller-registration/payment/payment-confirm/payment-confirm.component';
import { PaymentLookupComponent } from './components/driller-registration/payment/payment-lookup/payment-lookup.component';
import { DrillerRegistrationPaymentComponent } from './components/driller-registration/payment/payment.component';
import { PermitLookupComponent } from './components/driller-registration/permit/permit-lookup/permit-lookup.component';
import { PermitValidateComponent } from './components/driller-registration/permit/permit-validate/permit-validate.component';
import { DrillerRegistrationPermitComponent } from './components/driller-registration/permit/permit.component';
import { ProfileLookupComponent } from './components/driller-registration/profile/profile-lookup/profile-lookup.component';
import { ProfileUploadComponent } from './components/driller-registration/profile/profile-upload/profile-upload.component';
import { ProfileValidateComponent } from './components/driller-registration/profile/profile-validate/profile-validate.component';
import { DrillerRegistrationProfileComponent } from './components/driller-registration/profile/profile.component';
import { RenewIssueComponent } from './components/license-module/renew-issue/renew-issue.component';
import { RenewScheduleComponent } from './components/license-module/renew-schedule/renew-schedule.component';
import { LicenseUserLoginComponent } from './components/license-module/user/login/license-user-login.component';
import { LicenseUserSignupComponent } from './components/license-module/user/signup/license-user-signup.component';
import { OneDrillerAboutComponent } from './components/one-driller-about/one-driller-about.component';
import { OneDrillerBriefComponent } from './components/one-driller-brief/one-driller-brief.component';
import { OneDrillerContactComponent } from './components/one-driller-contact/one-driller-contact.component';
import { OneDrillerEquipmentComponent } from './components/one-driller-equipment/one-driller-equipment.component';
import { OneDrillerTrackRecordsComponent } from './components/one-driller-track-records/one-driller-track-records.component';
import { RequestConfirmComponent } from './components/request-module/request-confirm/request-confirm.component';
import { RequestDashbordComponent } from './components/request-module/request-dashboard/request-dashboard.component';
import { RequestOrderComponent } from './components/request-module/request-order/request-order.component';
import { RequestPaymentComponent } from './components/request-module/request-payment/request-payment.component';
import { DrillerComponent } from './pages/driller/driller.component';
import { OneDrillerComponent } from './pages/driller/one-driller/one-driller.component';
import { RequestComponent } from './pages/driller/request/request.component';
import { SearchResultComponent } from './pages/driller/search-result/search-result.component';
import { AboutUsComponent } from './pages/home/about-us/about-us.component';
import { ContactUsComponent } from './pages/home/contact-us/contact-us.component';
import { ExecutiveSecretaryComponent } from './pages/home/excutive-secretary/executive-secretary.component';
import { HomeComponent } from './pages/home/home.component';
import { AnalysisComponent } from './pages/home/operators/analysis/analysis.component';
import { DrillersComponent } from './pages/home/operators/drillers/drillers.component';
import { OperatorsComponent } from './pages/home/operators/operators.component';
import { PackageWaterComponent } from './pages/home/operators/package-water/package-water.component';
import { WaterTankComponent } from './pages/home/operators/water-tank/water-tank.component';
import { SettingsComponent } from './pages/home/settings/settings.component';
import { StaffsComponent } from './pages/home/staffs/staffs.component';
import { SubscribeComponent } from './pages/home/subscribe/subscribe.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NotFoundPage } from './pages/notfound/notfound.component';
import { RegTrackComponent } from './pages/reg-track/reg-track.component';
import { RenewHomeComponent } from './pages/renew/renew-home/renew-home.component';
import { RenewWorkflowComponent } from './pages/renew/renew-workflow/renew-workflow.component';
import { RenewComponent } from './pages/renew/renew.component';
import { ValidateDrillerComponent } from './pages/validate-driller/validate-driller.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: HomepageComponent, pathMatch: 'full' },
      { path: 'about_us', component: AboutUsComponent },
      { path: 'executive_secretary', component: ExecutiveSecretaryComponent },
      { path: 'staffs', component: StaffsComponent },
      {
        path: 'operators',
        component: OperatorsComponent,
        children: [
          { path: 'drillers', component: DrillersComponent },
          { path: 'package_water', component: PackageWaterComponent },
          { path: 'water_tanker', component: WaterTankComponent },
          { path: 'analysis', component: AnalysisComponent },
        ],
      },
      { path: 'contact_us', component: ContactUsComponent },
      { path: 'subscribe', component: SubscribeComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'home', redirectTo: '', pathMatch: 'full' },
    ],
  },
  {
    path: 'driller',
    component: DrillerComponent,
    children: [
      {
        path: 'service/:id',
        component: OneDrillerComponent,
        children: [
          {
            path: '',
            redirectTo: 'detail',
            pathMatch: 'full',
          },
          {
            path: 'detail',
            component: OneDrillerBriefComponent,
          },
          {
            path: 'record', // This path corresponds to the second tab
            component: OneDrillerTrackRecordsComponent,
          },
          {
            path: 'equip', // This path corresponds to the third tab
            component: OneDrillerEquipmentComponent,
          },
          {
            path: 'contact', // This path corresponds to the fourth tab
            component: OneDrillerContactComponent,
          },
          {
            path: 'about', // This path corresponds to the fifth tab
            component: OneDrillerAboutComponent,
          },
        ],
      },
      {
        path: '',
        component: LandingComponent,
        pathMatch: 'full',
      },
      {
        path: 'search',
        component: ValidateDrillerComponent,
      },
      {
        path: 'search-result',
        component: SearchResultComponent,
      },
      {
        path: 'renew',
        component: RenewComponent,
        children: [
          {
            path: '',
            component: RenewHomeComponent,
            pathMatch: 'full',
          },
          {
            path: 'workflow',
            component: RenewWorkflowComponent,
            children: [
              {
                path: '',
                redirectTo: 'schedule',
                pathMatch: 'full',
              },
              {
                path: 'schedule',
                component: RenewScheduleComponent,
              },
              {
                path: 'user-login',
                component: LicenseUserLoginComponent,
              },
              {
                path: 'user-signup',
                component: LicenseUserSignupComponent,
              },
              {
                path: 'issue',
                component: RenewIssueComponent,
              },
            ],
          },
        ],
      },
      {
        path: 'request',
        component: RequestComponent,
        children: [
          {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full',
          },
          {
            path: 'dashboard',
            component: RequestDashbordComponent,
          },
          {
            path: 'order',
            component: RequestOrderComponent,
          },
          {
            path: 'payment',
            component: RequestPaymentComponent,
          },
          {
            path: 'confirm',
            component: RequestConfirmComponent,
          },
        ],
      },
      {
        path: 'registration',
        component: DrillerComponent,
        children: [
          {
            path: '',
            component: RegTrackComponent,
            pathMatch: 'full',
          },
          {
            path: 'profile',
            component: DrillerRegistrationProfileComponent,
            children: [
              {
                path: '',
                redirectTo: 'lookup',
                pathMatch: 'full',
              },
              {
                path: 'lookup',
                component: ProfileLookupComponent,
              },
              {
                path: 'upload',
                component: ProfileUploadComponent,
              },
              {
                path: 'validate',
                component: ProfileValidateComponent,
              },
              // {
              //   path: 'complete',
              //   component: RenewScheduleComponent
              // },
            ],
          },
          {
            path: 'permit',
            component: DrillerRegistrationPermitComponent,
            children: [
              {
                path: '',
                redirectTo: 'lookup',
                pathMatch: 'full',
              },
              {
                path: 'lookup',
                component: PermitLookupComponent,
              },
              {
                path: 'validate',
                component: PermitValidateComponent,
              },
            ],
          },
          {
            path: 'account',
            component: DrillerRegistrationAccountComponent,
            children: [
              {
                path: '',
                redirectTo: 'lookup',
                pathMatch: 'full',
              },
              {
                path: 'lookup',
                component: AccountLookupComponent,
              },
              {
                path: 'validate',
                component: AccountValidateComponent,
              },
            ],
          },
          {
            path: 'payment',
            component: DrillerRegistrationPaymentComponent,
            children: [
              {
                path: '',
                redirectTo: 'lookup',
                pathMatch: 'full',
              },
              {
                path: 'lookup',
                component: PaymentLookupComponent,
              },
              {
                path: 'confirm',
                component: PaymentConfirmComponent,
              },
              {
                path: 'complete',
                component: PaymentCompleteComponent,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: 'package-water',
    component: DrillerComponent,
    children: [
      {
        path: '',
        component: LandingComponent,
        pathMatch: 'full',
      },
      {
        path: 'service/:id',
        component: OneDrillerComponent,
        children: [
          {
            path: '',
            redirectTo: 'detail',
            pathMatch: 'full',
          },
          {
            path: 'detail',
            component: OneDrillerBriefComponent,
          },
          {
            path: 'record', // This path corresponds to the second tab
            component: OneDrillerTrackRecordsComponent,
          },
          {
            path: 'equip', // This path corresponds to the third tab
            component: OneDrillerEquipmentComponent,
          },
          {
            path: 'contact', // This path corresponds to the fourth tab
            component: OneDrillerContactComponent,
          },
          {
            path: 'about', // This path corresponds to the fifth tab
            component: OneDrillerAboutComponent,
          },
        ],
      },
      {
        path: 'search',
        component: ValidateDrillerComponent,
      },
      {
        path: 'search-result',
        component: SearchResultComponent,
      },
      {
        path: 'renew',
        component: RenewComponent,
        children: [
          {
            path: '',
            component: RenewHomeComponent,
            pathMatch: 'full',
          },
          {
            path: 'workflow',
            component: RenewWorkflowComponent,
            children: [
              {
                path: '',
                redirectTo: 'schedule',
                pathMatch: 'full',
              },
              {
                path: 'schedule',
                component: RenewScheduleComponent,
              },
              {
                path: 'user-login',
                component: LicenseUserLoginComponent,
              },
              {
                path: 'user-signup',
                component: LicenseUserSignupComponent,
              },
              {
                path: 'issue',
                component: RenewIssueComponent,
              },
            ],
          },
        ],
      },
      {
        path: 'request',
        component: RequestComponent,
        children: [
          {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full',
          },
          {
            path: 'dashboard',
            component: RequestDashbordComponent,
          },
          {
            path: 'order',
            component: RequestOrderComponent,
          },
          {
            path: 'payment',
            component: RequestPaymentComponent,
          },
          {
            path: 'confirm',
            component: RequestConfirmComponent,
          },
        ],
      },
      {
        path: 'registration',
        component: DrillerComponent,
        children: [
          {
            path: '',
            component: RegTrackComponent,
            pathMatch: 'full',
          },
          {
            path: 'profile',
            component: DrillerRegistrationProfileComponent,
            children: [
              {
                path: '',
                redirectTo: 'lookup',
                pathMatch: 'full',
              },
              {
                path: 'lookup',
                component: ProfileLookupComponent,
              },
              {
                path: 'upload',
                component: ProfileUploadComponent,
              },
              {
                path: 'validate',
                component: ProfileValidateComponent,
              },
              // {
              //   path: 'complete',
              //   component: RenewScheduleComponent
              // },
            ],
          },
          {
            path: 'permit',
            component: DrillerRegistrationPermitComponent,
            children: [
              {
                path: '',
                redirectTo: 'lookup',
                pathMatch: 'full',
              },
              {
                path: 'lookup',
                component: PermitLookupComponent,
              },
              {
                path: 'validate',
                component: PermitValidateComponent,
              },
            ],
          },
          {
            path: 'account',
            component: DrillerRegistrationAccountComponent,
            children: [
              {
                path: '',
                redirectTo: 'lookup',
                pathMatch: 'full',
              },
              {
                path: 'lookup',
                component: AccountLookupComponent,
              },
              {
                path: 'validate',
                component: AccountValidateComponent,
              },
            ],
          },
          {
            path: 'payment',
            component: DrillerRegistrationPaymentComponent,
            children: [
              {
                path: '',
                redirectTo: 'lookup',
                pathMatch: 'full',
              },
              {
                path: 'lookup',
                component: PaymentLookupComponent,
              },
              {
                path: 'confirm',
                component: PaymentConfirmComponent,
              },
              {
                path: 'complete',
                component: PaymentCompleteComponent,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: 'water-tanker',
    component: DrillerComponent,
    children: [
      {
        path: 'service/:id',
        component: OneDrillerComponent,
        children: [
          {
            path: '',
            redirectTo: 'detail',
            pathMatch: 'full',
          },
          {
            path: 'detail',
            component: OneDrillerBriefComponent,
          },
          {
            path: 'record', // This path corresponds to the second tab
            component: OneDrillerTrackRecordsComponent,
          },
          {
            path: 'equip', // This path corresponds to the third tab
            component: OneDrillerEquipmentComponent,
          },
          {
            path: 'contact', // This path corresponds to the fourth tab
            component: OneDrillerContactComponent,
          },
          {
            path: 'about', // This path corresponds to the fifth tab
            component: OneDrillerAboutComponent,
          },
        ],
      },
      {
        path: '',
        component: LandingComponent,
        pathMatch: 'full',
      },
      {
        path: 'search',
        component: ValidateDrillerComponent,
      },
      {
        path: 'search-result',
        component: SearchResultComponent,
      },
      {
        path: 'renew',
        component: RenewComponent,
        children: [
          {
            path: '',
            component: RenewHomeComponent,
            pathMatch: 'full',
          },
          {
            path: 'workflow',
            component: RenewWorkflowComponent,
            children: [
              {
                path: '',
                redirectTo: 'schedule',
                pathMatch: 'full',
              },
              {
                path: 'schedule',
                component: RenewScheduleComponent,
              },
              {
                path: 'user-login',
                component: LicenseUserLoginComponent,
              },
              {
                path: 'user-signup',
                component: LicenseUserSignupComponent,
              },
              {
                path: 'issue',
                component: RenewIssueComponent,
              },
            ],
          },
        ],
      },
      {
        path: 'request',
        component: RequestComponent,
        children: [
          {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full',
          },
          {
            path: 'dashboard',
            component: RequestDashbordComponent,
          },
          {
            path: 'order',
            component: RequestOrderComponent,
          },
          {
            path: 'payment',
            component: RequestPaymentComponent,
          },
          {
            path: 'confirm',
            component: RequestConfirmComponent,
          },
        ],
      },
      {
        path: 'registration',
        component: DrillerComponent,
        children: [
          {
            path: '',
            component: RegTrackComponent,
            pathMatch: 'full',
          },
          {
            path: 'profile',
            component: DrillerRegistrationProfileComponent,
            children: [
              {
                path: '',
                redirectTo: 'lookup',
                pathMatch: 'full',
              },
              {
                path: 'lookup',
                component: ProfileLookupComponent,
              },
              {
                path: 'upload',
                component: ProfileUploadComponent,
              },
              {
                path: 'validate',
                component: ProfileValidateComponent,
              },
              // {
              //   path: 'complete',
              //   component: RenewScheduleComponent
              // },
            ],
          },
          {
            path: 'permit',
            component: DrillerRegistrationPermitComponent,
            children: [
              {
                path: '',
                redirectTo: 'lookup',
                pathMatch: 'full',
              },
              {
                path: 'lookup',
                component: PermitLookupComponent,
              },
              {
                path: 'validate',
                component: PermitValidateComponent,
              },
            ],
          },
          {
            path: 'account',
            component: DrillerRegistrationAccountComponent,
            children: [
              {
                path: '',
                redirectTo: 'lookup',
                pathMatch: 'full',
              },
              {
                path: 'lookup',
                component: AccountLookupComponent,
              },
              {
                path: 'validate',
                component: AccountValidateComponent,
              },
            ],
          },
          {
            path: 'payment',
            component: DrillerRegistrationPaymentComponent,
            children: [
              {
                path: '',
                redirectTo: 'lookup',
                pathMatch: 'full',
              },
              {
                path: 'lookup',
                component: PaymentLookupComponent,
              },
              {
                path: 'confirm',
                component: PaymentConfirmComponent,
              },
              {
                path: 'complete',
                component: PaymentCompleteComponent,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: 'water-soil',
    component: DrillerComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: RequestDashbordComponent,
      },
      {
        path: 'order',
        component: RequestOrderComponent,
      },
      {
        path: 'payment',
        component: RequestPaymentComponent,
      },
      {
        path: 'confirm',
        component: RequestConfirmComponent,
      },
    ],
  },
  { path: '**', component: NotFoundPage },
];
