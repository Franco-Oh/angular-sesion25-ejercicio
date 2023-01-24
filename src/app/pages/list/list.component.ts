import { Component, OnInit } from '@angular/core';
import { Interface } from 'src/app/interfaces/interface';
import { FerreteriaService } from 'src/app/services/ferreteria.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  ferreteria!:Interface[];

  constructor(private ferreteriaService:FerreteriaService) { }

  ngOnInit(): void {
    this.ferreteriaService.getFerreteria().subscribe( Ferreteria2 => {
      this.ferreteria = Ferreteria2;
    })
  }

  onClickDelete(ferreteria:Interface){
    const response = this.ferreteriaService.deleteFerreteria(ferreteria);
    console.log(response);
  }

}
