var arrayAlumnos=[];

class Alumnos{
    constructor(id,nombre){
        this.id=id;
        this.nombre=nombre;
    }
    toString(){
        return "ID" + this.id +",nombre" +this.nombre;
    }

    guardar(){
        arrayAlumnos.push(this);
    }

    actualizar(){
        for (i=0; i<arrayAlumnos.length; i++) {
            if (arrayAlumnos[i].id==this.id) {
                arrayAlumnos[i]=this;
            }
            
        }
    }

    eliminar(){
        for (i=0; i<arrayAlumnos.length; i++){
            if (arrayAlumnos[i].id==this.id) {
                return arrayAlumnos[i];
            }          
        }
    }

    consultar(){
        for (i=0; i<arrayAlumnos.length; i++){
            if(arrayAlumnos[i].id==this.id){
                return arrayAlumnos;
            }

        }
        return null;
    }
}