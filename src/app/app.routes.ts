import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { FAQComponent } from './Pages/faq/faq.component';
import { ServicesComponent } from './Pages/services/services.component';
import { ShopComponent } from './Pages/shop/shop.component';
import { AboutComponent } from './Pages/about/about.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'Home',
        component:HomeComponent
    },
    {
        path:'FAQ',
        component:FAQComponent
    },
    {
        path:'Services',
        component:ServicesComponent
    },
    {
        path:'Shop',
        component:ShopComponent
    },
    {
        path:'About',
        component:AboutComponent
    }
];
