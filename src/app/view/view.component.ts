import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/employee';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  //Employee : any =[];
  emplist:  Employee[];
  

  constructor(
    public restApi:RestApiService
  ) { }

  ngOnInit() {
    this.loadEmployees();//initializing the method inside ngOninit
  }

  // to Get full employees list as in db.json
  loadEmployees(){
    return this.restApi.getEmployees().subscribe(data => {
      this.emplist= data;
      console.log(this.emplist);
    }) 
      
  }

  //functionality to delete employee
  deleteEmployee(id: string) {
    if(window.confirm('Are you sure you want to delete?')) {
      this.restApi.deleteEmployee(id).subscribe(data =>{
        this.loadEmployees()
      })
    }
  }

}
