import { Component , OnInit} from '@angular/core';
import { Cubo } from '../../models/Cubo';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceCubos } from '../../services/service.cubos';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit{
  public cubo!: Cubo

  constructor(
    private _activateRoute: ActivatedRoute,
    private _service: ServiceCubos
  ){}

  ngOnInit(): void{
    this._activateRoute.params.subscribe((params: Params)=>{
      let id = parseInt(params['id'])
      this._service.getCubo(id).subscribe(response=>{
        this.cubo = response
      })
    })
  }
}
