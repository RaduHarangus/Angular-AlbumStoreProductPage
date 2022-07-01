import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { tap } from 'rxjs/operators';

@Injectable()
export class ProductService {

  _albumUrl: string = '../assets/album.json';

  constructor(private _http: HttpClient) { }

  getAlbum(id: number) {
    return this._http.get(this._albumUrl).pipe(
      tap(_ => console.log('fetched data'))
    );
  }

}
