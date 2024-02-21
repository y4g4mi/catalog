import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
{path:'',component: HomeComponent},
{path:'home',component: HomeComponent},
{path:'login',component: LoginComponent},
{path:"products", component : ProductsComponent},
{path:"**", component : PageNotFoundComponent}
];
