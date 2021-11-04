import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from './../../service/customer.service'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  customer: any =[];
  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
    this.getCustomer();
  }

  getCustomer(){
    this.customerService.getCustomer().subscribe(
      response =>{
        this.customer = response
        console.log("customer data: ", response);
      }
    )
  }

  edit(id){
    localStorage.setItem("view_id",id)
    this.router.navigate(['/customer/edit']);
  }

  view(id){
    localStorage.setItem("view_id",id)
    this.router.navigate(['/customer/view']);
  }

  delete(id){
    this.customerService.deleteCustomer(id).subscribe(
      response =>{
        this.getCustomer();
      }
    )
  }

}
