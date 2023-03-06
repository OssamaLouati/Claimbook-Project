import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {

  constructor(private httpClient: HttpClient) { 
  
  }
  loginUser(email: string ,password: string ){
   
    return this.httpClient.get('http://localhost:8082/user/'+email+'/'+password);
      
  }
}
