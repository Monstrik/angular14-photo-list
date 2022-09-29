import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Photo} from "../models/photo";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private httpClient: HttpClient) {
  }

  getPhotos(): Observable<Array<Photo>> {
    return this.httpClient.get(this.url) as Observable<Array<Photo>>;
  }

}
