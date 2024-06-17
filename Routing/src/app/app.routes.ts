import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
{path:'',redirectTo:'home',pathMatch:'full'},
 {path:'home',component:HomeComponent},
 {path:'about',component:AboutComponent},
 {path:'products',component:ProductsComponent},
 {path:'contacts',component:ContactsComponent},
 {path:'**',redirectTo:'home'}
];
