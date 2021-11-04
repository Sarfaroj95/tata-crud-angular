import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any;
  registerForm : FormGroup;
  customerData: any =[];
  constructor(private fb: FormBuilder, 
    private customerService: CustomerService,
    private router: Router
    ) {
    this.id = localStorage.getItem('view_id');
    this.customerService.getCustomerById(this.id).subscribe(
      response => {
        this.customerData = response
      }
    )
   }

  ngOnInit() {
    this.initFormData();
  }
  initFormData(){
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      description: ['', Validators.required],
      checkMe: [false, Validators.requiredTrue]
    })
  }

   get f() { return this.registerForm.controls; }

  onSubmit(){
    if (this.registerForm.invalid) {
      return;
  }
   
    let data = this.registerForm.value;
    // console.log("form Data: ", this.registerForm);
    this.customerService.editCustomer(this.id,data).subscribe(
      response =>{
       
        console.log("customer data: ", response);
        this.router.navigate(['/customer/dashboard'])
        this.registerForm.reset(); 
      }
    )
   
    
  }

  reset(){
    this.registerForm.reset(); 
  }
  only_alpha(event)
    {   
        var k;  
        k = event.charCode;
        return((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 ); 
    }

 only_number(event)
  {   
      var n;  
      n = event.charCode;  
      return(n > 47 && n < 58); 
  }
}
