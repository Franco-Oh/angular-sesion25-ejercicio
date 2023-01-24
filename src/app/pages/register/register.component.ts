import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { FerreteriaService } from 'src/app/services/ferreteria.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister!:FormGroup

  constructor(private ferreteriaService:FerreteriaService) {
    this.formRegister = new FormGroup({
      producto: new FormControl(),
      costo: new FormControl(),
      foto: new FormControl(),
    })
  }

  ngOnInit(): void {
  }

  async onSubmit(){
    console.log(this.formRegister.value);
    const response = this.ferreteriaService.addProduct(this.formRegister.value);
    console.log(response)
  }

}
