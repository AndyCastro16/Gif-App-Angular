import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private gifS: GifsService){

  }

  get tags(){
    return this.gifS.tagHistory;
  }
  search(tag: string): void{
    this.gifS.searchTag(tag);
  }
}
