import { RouteConfig } from 'vue-router';

import StartComponent from './start.component';
import HomeComponent from './home/home.component';
import LoginComponent from './authentication/login/login.component';
import RegisterComponent from './authentication/register/register.component';
import PasswordResetSendComponent from './authentication/password-reset/password-reset-send/password-reset-send.component';
import PasswordResetEditComponent from './authentication/password-reset/password-reset-edit/password-reset-edit.component';

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
      },
      {
        path: 'forgot-password',
        component: PasswordResetSendComponent
      },
      {
        path: 'reset-password',
        component: PasswordResetEditComponent
      }
    ]
  }
];
