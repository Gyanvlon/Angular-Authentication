import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AppComponent } from '../app.component';
import { AdminComponent } from '../admin/admin.component';
import { AuthGuard } from '../guards/auth.guard';
import { Role } from '../model';
import { LoginComponent } from '../login/login.component';
const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin] } },
  { path: 'login', component: LoginComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
@NgModule({
  declarations: [],
  // imports: [ RouterModule.forRoot(routes) ],
  // exports: [ RouterModule ]
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
