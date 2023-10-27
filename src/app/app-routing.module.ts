import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthGuard } from './services/auth.guard';
import { StudioMainPageComponent } from './studio/studio-main-page.component';
import { StudioNewComponent } from './studio/studio-new.component';

const routes: Routes = [
    { path: '', redirectTo: 'studio-main-page', pathMatch: 'full' },
    { path: 'studio-main-page', component: StudioMainPageComponent },
    { path: 'studio-new', component: StudioNewComponent, canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: '**', component: HomeComponent },                       // catch-all in case no other path matched
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
