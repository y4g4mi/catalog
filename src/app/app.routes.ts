import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:'',component: LoginComponent},
{path:"products", component : ProductsComponent},
{path:"customers", component : CustomersComponent}

];
