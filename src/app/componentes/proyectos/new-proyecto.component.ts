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
  nombre:string="";
  proyecto: Proyecto = null;
  constructor(public imageService: ImageService,private activatedRouter:ActivatedRoute, private sProyecto:ProyectoService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    this.img=this.imageService.urlImg
    const proy = new Proyecto(this.descripcion, this.img);
    this.sProyecto.save(proy).subscribe(data=>{alert("Proyecto añadido");
    this.router.navigate(['']);},err=>{alert("Falló");
    this.router.navigate([''])})   
  }

  uploadImage($event: any) {
    //const id = this.activatedRoute.snapshot.params['id'];   (ESTA LINEA SE ELIMINA)
    const name = "proyecto_" + this.nombre; 
    this.imageService.uploadImage($event, name);
  }


}
