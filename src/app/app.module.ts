import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatStepperModule} from '@angular/material/stepper';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { MenuLinksComponent } from './menu-links/menu-links.component';
import { OuterTabsComponent } from './outer-tabs/outer-tabs.component';
import { InnerTabsComponent } from './inner-tabs/inner-tabs.component';
import { WhoCoveredComponent } from './who-covered/who-covered.component';
import { MatCardModule } from '@angular/material/card';
import { DemoExampleComponent } from './demo-example/demo-example.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FooterComponent } from './footer/footer.component';






@NgModule({
  declarations: [
    AppComponent,
    MenuButtonComponent,
    MenuLinksComponent,
    OuterTabsComponent,
    InnerTabsComponent,
    routingComponents,
    WhoCoveredComponent,
    DemoExampleComponent,
    FooterComponent,
    
    
    
  ],

  imports: [
    MatCheckboxModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatToolbarModule,
    MatStepperModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatCardModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
