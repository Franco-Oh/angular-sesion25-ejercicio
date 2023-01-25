import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { FerreteriaService } from 'src/app/services/ferreteria.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister!:FormGroup

  msgRegistrado = false;

  constructor(private ferreteriaService:FerreteriaService, private formBuilder:FormBuilder) {
    this.formRegister = new FormGroup({
      producto: new FormControl(),
      costo: new FormControl(),
      foto: new FormControl(),
    })
  }

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      producto:['', 
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ],
      costo:['', 
        [
          Validators.required,
          Validators.pattern('[0-9]*'),
          Validators.minLength(1)
        ]
      ],
      foto:['', 
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ]
    });
  }

  async onSubmit(){
    console.log(this.formRegister.value);
    const response = this.ferreteriaService.addProduct(this.formRegister.value);
    console.log(response);
    this.msgRegistrado = true;
    setTimeout(()=>{
      this.formRegister.reset();
    }, 1000)
    
    setTimeout(()=>{
      this.msgRegistrado = false;
    }, 5000)
  }

}
