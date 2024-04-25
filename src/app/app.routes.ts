import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
];
