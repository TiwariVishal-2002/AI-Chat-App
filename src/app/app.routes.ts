import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Home } from './home/home';

export const routes: Routes = [
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: 'login', component: Login, pathMatch: 'full' },
    { path: '', component: Home, pathMatch: 'full' },
];
