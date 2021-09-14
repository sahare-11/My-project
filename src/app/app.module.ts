import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { MenuLinksComponent } from './menu-links/menu-links.component';
import { OuterTabsComponent } from './outer-tabs/outer-tabs.component';
import { InnerTabsComponent } from './inner-tabs/inner-tabs.component';





@NgModule({
  declarations: [
    AppComponent,
    MenuButtonComponent,
    MenuLinksComponent,
    OuterTabsComponent,
    InnerTabsComponent,
  
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatToolbarModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
