import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url = environment.url
  constructor(private http: HttpClient) { }

  getCustomer(): Observable<any>{
    return this.http.get<any>(this.url+'customer')
  }

  getCustomerById(id: any): Observable<any>{
    return this.http.get<any>(this.url+'customer/'+ id)
  }

  addCustomer(data: any): Observable<any>{
    return this.http.post<any>(this.url+'customer', data)
  }

  editCustomer(id: any,data: any): Observable<any>{
    return this.http.put<any>(this.url+'customer/'+ id, data)
  }

  deleteCustomer(id: any): Observable<any> {
    return this.http.delete<any>(this.url+'customer/'+ id)
  }

  
}
