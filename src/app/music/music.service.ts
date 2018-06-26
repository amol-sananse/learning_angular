import { Injectable } from '@angular/core'
import { IMusic } from './music.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class MusicService {
    private _musicUrl = 'https://ngmusicdb.herokuapp.com/api/getMusic';

    constructor(private _http:Http) {}

    getProducts():Observable<IMusic[]> {
        return this._http.get(this._musicUrl)
                    .map((data:Response) => <IMusic[]>data.json()[0].artists)
                    .catch(this.handleError); 
    }

    private handleError(error:Response) {
        return Observable.throw(error.statusText);
    } 
}