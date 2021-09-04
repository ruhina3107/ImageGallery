import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }
  static login_authentication(data: { email: any; password: any; }): any {
    throw new Error("Method not implemented.");
  }
  url = 'http://localhost:3000/api/admin';

  
  login_authentication(data){
   const httpheaders = new HttpHeaders({
    'Content-Type': 'application/json'
    });
    return this.http.post(`${this.url}/login`,data,{
      headers: httpheaders,
      observe: 'response'
    });
  }
  // Users List View
  usersListView(page){
    const httpheaders = new HttpHeaders({
    'Content-Type': 'application/json'
    });
    return this.http.get(`${this.url}/usersListView/${page}`,{
      headers: httpheaders,
      observe: 'response'
    });
  }
  // Provider List View
  providersListView(){
    const httpheaders = new HttpHeaders({
    'Content-Type': 'application/json'
    });
    return this.http.get(`${this.url}/providerListView`,{
      headers: httpheaders,
      observe: 'response'
    });
  }  

  signup(data){
    const httpheaders = new HttpHeaders({
     'Content-Type': 'application/json'
     });
     return this.http.post(`${this.url}/signup`,data,{
       headers: httpheaders,
       observe: 'response'
     });
   }  
   // country add
   countryAdd(data){
    const httpheaders = new HttpHeaders({
     'Content-Type': 'application/json'
     });
     return this.http.post(`${this.url}/countryAdd`,data,{
       headers: httpheaders,
       observe: 'response'
     });
   }     
     // Country List View
     countryView(page){
    const httpheaders = new HttpHeaders({
    'Content-Type': 'application/json'
    });
    return this.http.get(`${this.url}/countryView`,{
      headers: httpheaders,
      observe: 'response'
    });
  } 
}
