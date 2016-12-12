import { Component, OnInit } from '@angular/core';
import {Service} from '../service/service'
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[Service]
})
export class LoginComponent implements OnInit {

  
   email :string;
   pass:string;
  constructor(private service:Service,private router:Router) 
  {
      this.email = "";
      this.pass = "";

  }
  ngOnInit()
  {

  }

  emailLogin()
  {
     var auth = this.service.signWithEmail(this.email,this.pass);
     return auth.then(data =>{
       if(data)
       {
         this.router.navigate(['genology']);
         console.log(data.email);
       }
     }
     ).catch(error=>
     {
       console.log(error);
     })
  }
  profile()
  {
    //  this.login().then(data=>{
    //    console.log(data);
    //  })
  }
  signUp()
  {
   return this.service.createUser(this.email,this.pass).then(data =>{
    
         this.router.navigate(['profile']);
         console.log(data);
     }
     ).catch(error=>
     {
       console.log(error);
     })
  }
  test()
  {
     this.router.navigate(['genology']);
     console.log(this.router);
     console.log('log test');
  }

}
