import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myUpper'
})

export class upperValuePipe implements PipeTransform {
    transform(value:string) {
        return value.toUpperCase();
    }
}