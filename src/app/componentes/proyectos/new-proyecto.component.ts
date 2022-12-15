import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/servicios/image.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {

  descripcion:string='';
  img:string='';
  proyecto: Proyecto = null;
  constructor(public imageService: ImageService,private activatedRouter:ActivatedRoute, private sProyecto:ProyectoService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proy = new Proyecto(this.descripcion, this.img);
    this.sProyecto.save(proy).subscribe((response)=>{alert("Proyecto añadido");
    this.router.navigate(['']);},err=>{alert("Falló");
    this.router.navigate([''])})   
  }


}
