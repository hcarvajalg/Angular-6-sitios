import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SitioComponent } from './sitio/sitio.component';
import { SitiosCiudadesComponent } from './sitios-ciudades/sitios-ciudades.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesComponent } from './categories/categories.component';
import { DownloadAppComponent } from './download-app/download-app.component';
import { FooterComponent } from './footer/footer.component';
import { SearcherComponent } from './searcher/searcher.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PostsComponent,
    UsersComponent,
    DetailsComponent,
    HomeComponent,
    SitioComponent,
    SitiosCiudadesComponent,
    CategoriesComponent,
    DownloadAppComponent,
    FooterComponent,
    SearcherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
