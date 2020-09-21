import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-detail',
  template: `
              <ul *ngFor="let employee of employees">
                  <li>{{employee.age}}{{employee.id}}</li>
              </ul>
            `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {

  public employees=[];
  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
    .subscribe(data=>this.employees=data);
  }

}
