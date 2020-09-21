import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url:string="/assets/data/employee.json";

  constructor(private http:HttpClient) { }


  //cast an observable to the IEmployee array
  getEmployees():Observable<IEmployee[]>{
    // return [
    //   {"id":1,"name":"A","age":23},
    //   {"id":2,"name":"B","age":24},
    //   {"id":3,"name":"C","age":25}
    // ];
    return this.http.get<IEmployee[]>(this._url)
  }
}
