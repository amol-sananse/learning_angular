import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
    selector: 'employee-comp',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})

export class EmployeeComponent {
    languages = ['AngularJS', 'ReactJS', 'NodeJS'];
    model = new Employee('Amol', 'Sananse', true, 'male', 'Angular');

    firstToUpper(value: string): void {
        this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
    }

    
}