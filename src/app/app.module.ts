import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarFormComponent } from './sidebar-form/sidebar-form.component';
import { SidebarDataComponent } from './sidebar-data/sidebar-data.component';
import { SidebarCodeComponent } from './sidebar-code/sidebar-code.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarFormComponent,
    SidebarDataComponent,
    SidebarCodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
