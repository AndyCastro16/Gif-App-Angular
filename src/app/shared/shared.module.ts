import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LazyLoaderComponent } from './components/lazy-loader/lazy-loader.component';



@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    LazyLoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    LazyLoaderComponent
  ]
})
export class SharedModule { }
