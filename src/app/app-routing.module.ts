import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SitioComponent } from './sitio/sitio.component';
import { CategoriesResultComponent } from './categories-result/categories-result.component';
import { SitiosResultComponent } from './sitios-result/sitios-result.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sitio/:id', component: SitioComponent },
  { path: 'categories-result/:id', component: CategoriesResultComponent },
  { path: 'sitios-result', component: SitiosResultComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
