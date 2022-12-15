import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/servicios/image.service';




import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {

  proyecto: Proyecto = null;
  constructor(private sProyecto:ProyectoService, private activatedRouter:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.detail(id).subscribe((data) => {
      this.proyecto=data;
    }, err=>{
      alert("Error al modificar proyecto");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void{
    const id:number = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.update(id, this.proyecto).subscribe((data)=>{this.sProyecto = data;
    this.router.navigate(['']);
    },err => {
      alert("Error al modificar proyecto...");
      this.router.navigate(['']);
    })
  }

}
