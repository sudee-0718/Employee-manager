import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';//
import { Employee } from '../shared/employee'//
import { Observable, throwError } from 'rxjs';//
import { retry , catchError } from 'rxjs/operators';//

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  //  define api
  url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  //crud methods to consume restful api

  //http options this is used for headers

  httpOptions = {
    headers :new HttpHeaders({
      'Content-Type':'application/json'
    })
  };

  //HttpClient API get()  method => fetch employees list
  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url + 'employees');
    
  }
  //HttpClient API get()  method => fetch employee
  getEmployee (id: string):Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url + 'employees/' + id);
    
  }

  //HttpClient API POST()  method => create employee
  createEmployee (employee: any ):Observable<Employee[]>{
    return this.http.post<Employee[]>(this.url + 'employees',JSON.stringify(employee) , this.httpOptions);
    
  }

  //HttpClient API PUT()  method => update employee
  updateEmployee (id: string  ,employee: any):Observable<Employee[]>{
    return this.http.put<Employee[]>(this.url + 'employees/' +id ,JSON.stringify(employee) , this.httpOptions);
    
  }

  //HttpClient API delete()  method => delete employee
  deleteEmployee (id: string ) {
    return this.http.delete<Employee[]>(this.url + 'employees/' +id ,  this.httpOptions);
    
  }

  

}
