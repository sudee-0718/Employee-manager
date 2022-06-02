import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute , Router } from '@angular/router';
import { Employee } from '../shared/employee';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  employeeData:any ;//must be declared as any to access properties like email,name , phone

  constructor(
    public restApi : RestApiService,
    public actRoute : ActivatedRoute,
    public router : Router
  ) { }

  ngOnInit() {
    this.restApi.getEmployee(this.id).subscribe(data => {
      this.employeeData = data;//details of a single employee(an object) is returned and stored in employeeData
      //and those details displayed in input fields before updation    
      console.log(this.employeeData);
    })  
    }
  

  // update employee data
  updateEmployee() {
    if (window.confirm('Are you sure you want to update?')) {
      //id of selected employee and modifiied value in input fields passed with update method
      this.restApi.updateEmployee(this.id , this.employeeData).subscribe(data =>{
        console.log(data) //put method returns the object (updatedemployee details ) and stores in data
        this.router.navigate(['/view'])
      })
    }
  }

}
