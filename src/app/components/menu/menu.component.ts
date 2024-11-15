import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from '../../services/service.cubos';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  public marcas!: Array<any>

  constructor(
    private _service: ServiceCubos
  ){}
  
  getMarcas(): void{    
    this._service.getMarcas().subscribe(response=>{
      this.marcas = response
    })
  }

  ngOnInit(): void {
    this.getMarcas()
  }
}
