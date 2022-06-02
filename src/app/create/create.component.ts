import { Component, OnInit ,Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @Input() employeeDetails = { name: '',lname:'', email:'', phone: '',post:'',dept:'' }

  constructor(
    public restApi :RestApiService,
    public router :Router
  ) { }

  ngOnInit() {

  }

  addEmployee(dataEmployee: any) {
    this.restApi.createEmployee(this.employeeDetails).subscribe(data =>{
      console.log(data) //created employee object is returned by post method and stored in data variable
      this.router.navigate(['/view'])
    }) 
  }

}
