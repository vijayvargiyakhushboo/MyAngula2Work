import { Component, OnInit ,NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import { RouterModule, Routes, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { HomeComponent } from './home.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Khushboo';
  city = 'Indore';
  chkbutton = false;
  serverData = 'No server is created';
 
 constructor() {
	setTimeout(() => {
	this.chkbutton =true;
	},2000);
}
ngOnInit() {
    // listenging to routing navigation event
  
  }
	getServerData() {
	 this.serverData = 'Server is created';	
	}
  getCityName(){
  return this.city;
  }
}

const appRoutes: Routes = [
  { path: './home', component: HomeComponent}
  ]

@NgModule({
  imports: [ BrowserModule,FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HomeComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
