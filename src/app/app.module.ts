import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PrismicGraphqlService } from 'src/prismic-graphql/prismic-graphql.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PrismicGraphqlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
