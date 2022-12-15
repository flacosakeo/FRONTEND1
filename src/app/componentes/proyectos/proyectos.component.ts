import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proy:Proyecto[]=[];

  constructor(private sProyecto:ProyectoService, private tokenService:TokenService, private router:Router) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarProyecto(){
    this.sProyecto.lista().subscribe(data=>{this.proy = data;})
  }

  delete(id?: number){
    if (id!=undefined){
      this.sProyecto.delete(id).subscribe((data)=>
        {
          this.cargarProyecto();
        }, err => {
          alert("No se pudo borrar el proyecto");
        }
      )
    }
    this.router.navigate(['']);
  }

}
