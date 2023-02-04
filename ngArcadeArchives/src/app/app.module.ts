import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ArcadesListComponent } from './components/arcades-list/arcades-list.component';
import { ArcadeComponent } from './components/arcade/arcade.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ArcadeService } from './services/arcade.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    ArcadesListComponent,
    ArcadeComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ArcadeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
