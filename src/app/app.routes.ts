import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { MainComponent } from './main/main.component';
import { authGuard } from './core/guards/auth.guard';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';




export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: MainComponent,
        canActivate: [authGuard],
        children: [
            {
                path: '',
                component: HeaderComponent,
            },
            {
                path: '',
                component:FooterComponent
            }
        ]
    }
];
