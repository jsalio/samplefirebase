import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { StatusesComponent } from './statuses/statuses.component';

import { FormsModule } from '@angular/forms';
import { StatusesService } from './statuses/statuses.service';

export const fireBaseConfig = {
 
};

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidebarComponent,
    StatusesComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(fireBaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [ StatusesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
