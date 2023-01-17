import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiUserService implements OnInit {

  url = "https://jsonplaceholder.typicode.com/users";

  constructor( private http:HttpClient) { }

  ngOnInit(): void {
   
  }

  getMostrar(){
    return this.http.get<any>(this.url);
  }
}
