import { RouteConfig } from 'vue-router';

import StartComponent from './start.component';
import HomeComponent from './home/home.component';
import LoginComponent from './authentication/login/login.component';
import RegisterComponent from './authentication/register/register.component';

export const StartRoutePaths: RouteConfig[] = [
  {
    path: '/start',
    component: StartComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  }
];
