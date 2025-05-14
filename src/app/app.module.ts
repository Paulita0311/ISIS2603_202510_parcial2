import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatosListComponent } from './candidatos/candidatos-list/candidatos-list.component';
import { CandidatosDetailComponent } from './candidatos/candidatos-detail/candidatos-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidatosListComponent,
    CandidatosDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
