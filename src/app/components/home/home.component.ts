import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from '../../services/service.cubos';
import { Cubo } from '../../models/Cubo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  public cubos!: Array<Cubo>

  constructor(
    private _service: ServiceCubos
  ){}

  loadCubos(): void{
    this._service.getCubos().subscribe(response=>{
        this.cubos = response
    })
  }

  ngOnInit():void{
    this.loadCubos()
  }
}
