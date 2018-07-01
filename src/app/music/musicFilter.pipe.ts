import { Pipe, PipeTransform } from '@angular/core';
import { IMusic } from './music.model'

@Pipe({
    name: 'musicFilterPipe'
})

export class MusicFilterPipe implements PipeTransform {
    transform(value:IMusic[], filterBy:string) {
        filterBy = filterBy ? filterBy.toLowerCase() : null;
        return filterBy ? 
                value.filter((music:IMusic) => 
                music.name.toLowerCase().indexOf(filterBy) !== -1) : 
            value;
    }
}