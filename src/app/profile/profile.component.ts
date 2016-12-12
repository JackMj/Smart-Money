import { Component, OnInit } from '@angular/core';
import {Service} from '../service/service'
import {Router} from '@angular/router';
import {ProfileviewComponent} from '../profileview/profileview.component'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[Service]
})
export class ProfileComponent implements OnInit {
   firstname
   lastname
   email
   phonenumber
   accnumber
   bankname
   referencenumber
  constructor(private service:Service,private router:Router)
  {
      this.service = service;
      this.firstname = "";
      this.lastname = "";
      this.email = "";
      this.phonenumber = "";
      this.bankname = "";
      this.accnumber = "";
      this.referencenumber = "";

  }


  ngOnInit() 
  {
  }
  save()
  {
    let profileObj = {firstname:this.firstname,
                     lastname:this.lastname,
                     phonenumber:this.phonenumber,
                    bankname:this.bankname,
                    accnumber:this.accnumber,
                   referencenumber:this.referencenumber}

      this.service.saveProfile(profileObj).then(result=>{
          console.log(result);
          this.router.navigate(['profileview'])
      });        
         
  }

}
