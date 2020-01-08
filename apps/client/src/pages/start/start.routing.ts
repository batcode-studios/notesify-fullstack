import { RouteConfig } from 'vue-router';

import StartComponent from './start.component';
import HomeComponent from './home/home.component';
import LoginComponent from './authentication/login/login.component';
import RegisterComponent from './authentication/register/register.component';
import ForgotPasswordComponent from './authentication/password-reset/forgot-password/forgot-password.component';
import PasswordResetComponent from './authentication/password-reset/password-reset/password-reset.component';
import AuthenticationComponent from './authentication/authentication.component';
import { AppRoutePaths } from '../../_common/app-route.enum';
import { AuthRoutePaths, StartRoutePaths } from './_common/start-route.enum';
import VerifyEmailComponent from './authentication/verify-email/verify-email.component';

export const StartRoutes: RouteConfig[] = [
  {
    path: `/${AppRoutePaths.START}`,
    component: StartComponent,
    children: [
      {
        path: AppRoutePaths.EMPTY,
        component: HomeComponent
      },
      {
        path: StartRoutePaths.AUTH,
        component: AuthenticationComponent,
        children: [
          {
            path: AppRoutePaths.EMPTY,
            component: LoginComponent
          },
          {
            path: AuthRoutePaths.LOGIN,
            name: AuthRoutePaths.LOGIN,
            component: LoginComponent
          },
          {
            path: AuthRoutePaths.REGISTER,
            name: AuthRoutePaths.REGISTER,
            component: RegisterComponent
          },
          {
            path: AuthRoutePaths.FORGOT_PASSWORD,
            name: AuthRoutePaths.FORGOT_PASSWORD,
            component: ForgotPasswordComponent
          },
          {
            path: AuthRoutePaths.PASSWORD_RESET,
            name: AuthRoutePaths.PASSWORD_RESET,
            component: PasswordResetComponent
          },
          {
            path: AuthRoutePaths.VERIFY_EMAIL,
            name: AuthRoutePaths.VERIFY_EMAIL,
            component: VerifyEmailComponent
          }
        ]
      }
    ]
  }
];
