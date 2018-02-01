import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule 
    ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ RouterModule ]
})



export class AppModule { }
