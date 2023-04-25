import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput') 
  public tagInput!: ElementRef<HTMLInputElement>
  constructor(private gifS: GifsService){

  }
  searchTag():void{
    const newTag = this.tagInput.nativeElement.value
    
    this.gifS.searchTag(newTag);

    this.tagInput.nativeElement.value = '';
  }
}
