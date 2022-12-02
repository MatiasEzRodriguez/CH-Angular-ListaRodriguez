import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-alumn',
  templateUrl: './lista-alumn.component.html',
  styleUrls: ['./lista-alumn.component.css']
})
export class ListaAlumnComponent implements OnInit {

  public nombre: string;

  constructor() { }

  ngOnInit(): void {
    //this.nombre = "Lista ejemplo"
  }

}



