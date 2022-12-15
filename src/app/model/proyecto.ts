export class Proyecto {
    id? : number;
    descripcion : string;
    img : string;

    constructor(descripcion: string, img: string){
        this.descripcion = descripcion;
        this.img = img;
    }
}
