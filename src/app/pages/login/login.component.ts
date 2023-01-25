import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin!:FormGroup;

  msgCorreoInvalido = false;

  constructor( private userService:UserServicesService, private router:Router, private formBuilder: FormBuilder ){
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email:['', 
        [
          Validators.required,
          // Validators.minLength(5)
          Validators.email
        ]
      ],
      password:['', 
        [
          Validators.required,
          Validators.pattern('[0-9]*'),
          Validators.minLength(6)
        ]
      ]
    });
  }

  onSubmit(){
    this.userService.login(this.formLogin.value)
    .then(
      response => {
        console.log(response)
        this.router.navigate(['/home']);
      }
    )
    .catch( error => {
      console.log(error);
      this.msgCorreoInvalido = true;
      // Tiempo de 5 segundos para borrar información
      setTimeout(()=>{
        this.msgCorreoInvalido = false;
      }, 5000)
    })
  }

}
