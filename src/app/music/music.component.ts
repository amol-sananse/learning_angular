import { Component, OnInit } from '@angular/core';
import { MusicService } from './music.service';
import { IMusic } from './music.model';

@Component({
    selector: 'music-comp',
    templateUrl: './music.component.html',
    styleUrls: ['./music.component.css']
})

export class MusicComponent implements OnInit {
    musicTitle:string = 'Music Listing';
    showImage:boolean = true;
    showMusicListing:boolean = true;
    filterData:string;
    errorMessage:string;
    music:IMusic[];
    
    toggleImage(): void 
    {
        this.showImage = !this.showImage;
    }

    constructor(private _musicService:MusicService){

    }

    ngOnInit():void {
        this._musicService.getProducts()
            .subscribe((data) => this.music = data,
            (err) => this.errorMessage = err);
    }
}