import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsComponent implements OnInit {
  @Input()
  public gif!: Gif;

  constructor(private gifServ: GifsService) {
  }
  ngOnInit(): void {
    if(!this.gif) throw new Error('Method not implemented.');
  }

}
