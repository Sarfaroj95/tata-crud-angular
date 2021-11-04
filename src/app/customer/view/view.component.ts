import { CustomerService } from './../../service/customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  customerData: any =[];
  constructor(private customerService: CustomerService) {
    let id = localStorage.getItem('view_id');
    this.customerService.getCustomerById(id).subscribe(
      response => {
        this.customerData = response
      }
    )
   }

  ngOnInit() {
  }

}
