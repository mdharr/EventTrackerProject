import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ArcadeComponent } from './components/arcade/arcade.component';
import { ArcadesListComponent } from './components/arcades-list/arcades-list.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'arcades', component: ArcadesListComponent },
  { path: 'arcade', component: ArcadeComponent },
  { path: 'arcade/:id', component: ArcadesListComponent },
  { path: '**', component: NotFoundComponent } //page not found route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
