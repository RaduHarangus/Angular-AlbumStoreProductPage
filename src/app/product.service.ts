import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { tap } from 'rxjs/operators';
import { AlbumInfo } from "./album-info";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';

  constructor(private _http: HttpClient) { }

  getAlbum(id: number): Observable<AlbumInfo> {
    return this._http.get<AlbumInfo>(this._albumUrl).pipe(
      tap(data => console.log('fetched data: ', data))
    );
  }

}
