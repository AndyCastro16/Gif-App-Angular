import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-loader',
  templateUrl: './lazy-loader.component.html',
  styleUrls: ['./lazy-loader.component.scss']
})
export class LazyLoaderComponent implements OnInit {
  @Input()
  public url!: string;
  @Input()
  public alt: string = '';
  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if(!this.url) throw new Error('Method not implemented.');
  }

  onLoad(): void{
    this.hasLoaded = true;
  }

}
