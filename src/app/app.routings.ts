import {ModuleWithProviders } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component'
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {ProfileviewComponent} from './profileview/profileview.component'
import {GenologyComponent} from './genology/genology.component'
const appRouts:Routes = [

    {
        path:'',
        component:LoginComponent
    }
    ,
    {
        path:'home',
        component:HomeComponent
    }
    ,
    {
        path:'profile',
        component:ProfileComponent
    }
    ,
    {
        path:'profileview',
        component:ProfileviewComponent
    }
    ,  
    {
        path:'genology',
        component:GenologyComponent
    }

   

]
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRouts)