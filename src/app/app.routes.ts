import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { MainComponent } from './main/main.component';
import { authGuard } from './core/guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetDeleteProduitComponent } from './Parametrage/Generale/Produit/get-delete-produit/get-delete-produit.component';
import { GetDeleteUsersComponent } from './Parametrage/Generale/User/get-delete-users/get-delete-users.component';
import { GetDeleteStationComponent } from './Parametrage/Station/get-delete-station/get-delete-station.component';




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
                component: DashboardComponent,
            },
            {
                path: 'parametrage',
                children: [
                    {
                        path: 'generale',
                        children: [
                            {
                                path: 'produit',
                                component: GetDeleteProduitComponent
                            },
                            {
                                path: 'user',
                                component:GetDeleteUsersComponent
                            }
                        ]
                    },
                    {
                        path: 'station',
                        component: GetDeleteStationComponent
                    }
                ]
            }
            
        ]
    }
];
