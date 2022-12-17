import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/Servicios/autenticacion.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  email: String = "";
  password : String = "";

  

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private autService: AutenticacionService) {
    this.form=this.formBuilder.group(
      {
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(4)]],
        deviceId:[""],
        deviceType:[""],
        notificationToken:[""]
      })
   }

  ngOnInit(): void {
  }

login(){
  
}

get Email(){
   return this.form.get('email');
  }

get Password(){
  return this.form.get('password');
}


}
