import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
 
    registerForm : FormGroup;
    regFrom : FormGroup;
    registerData: any = [];
    count:any;
    id: any = 1;
    constructor(private fb: FormBuilder, 
      private customerService: CustomerService,
      private router: Router
      ) {}
  
    ngOnInit() {
      this.initFormData();
      this.count = this.id ++;
      this.regFrom=this.fb.group({
        Roll_number:[""],
        title:[""]
      })
    }
    initFormData(){
      this.registerForm = this.fb.group({
        id: [this.count],
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
      this.customerService.addCustomer(data).subscribe(
        response =>{
         this.router.navigate(['/customer/dashboard'])
          this.registerForm.reset(); 
        }
      )
    }

    addData(){
      let data = this.regFrom.value;
      console.log("Form data: ", data);
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
  
    reset(){
      this.registerForm.reset(); 
    }
  }