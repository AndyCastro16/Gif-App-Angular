import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardsComponent } from './components/cards/cards.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MainPageComponent,
    SearchBoxComponent,
    CardListComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    MainPageComponent
  ]
})
export class GifsModule { }
