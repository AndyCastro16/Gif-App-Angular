import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  //Variables
  public gifsList: Gif[] = [];
  private _tagHistory: string[] = [];
  private apiKey: string = 'C07eUth1sIePqTo2qywL89as7IoUqTPU'
  private serviceUrl: string = 'http://api.giphy.com/v1/gifs/search'
  constructor( private http: HttpClient) {
    this.loadLocalStorage();
   }

  //funciones
  get tagHistory() {
    return this._tagHistory;
  }
  private organization(tag: string):void{
    tag = tag.toLowerCase();
    if(this._tagHistory.includes(tag)){
      this._tagHistory = this._tagHistory.filter( (oldTag)=> oldTag != tag)
    }
    this._tagHistory.unshift(tag);
    this._tagHistory = this.tagHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    //El localstorage es nativo de la web por lo que no es necesario importar
    //SetItem se usa para guardar items dentro del storage
    localStorage.setItem('tagHistory', JSON.stringify(this._tagHistory));
  }

  private loadLocalStorage(): void {
    //El localstorage es nativo de la web por lo que no es necesario importar
    if( localStorage.getItem == null) return;
    this._tagHistory = JSON.parse(localStorage.getItem('tagHistory')!);
    if( this._tagHistory.length === 0) return;
    this.searchTag(this._tagHistory[0]);
  }

  searchTag(tag: string): void{
    if (tag.length === 0) return;
    this.organization(tag);
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '20')
      .set('q', tag)

    this.http.get<SearchResponse>(`${ this.serviceUrl }`, { params })
      .subscribe((resp)=>{
        this.gifsList = resp.data
      })
    console.log(this.tagHistory)
  }
}
