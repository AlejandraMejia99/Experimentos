var arrayAlumnos=[];
class Alumnos{

    constructor(id,fechanacimiento,promedio,anioegreso,curriculo) //son los campos que llega a pedir
    {
        this.id=id;
        this.fechanacimiento=fechanacimiento;
        this.promedio=promedio;
        this.anioegreso=anioegreso;
        this.curriculo=curriculo;
    }
    toString() {
        return "id:"+this.id+",fechanacimiento:"+this.fechanacimiento+
        ",promedio:"+this.promedio+
        ",anioegreso:"+this.anioegreso+
        ",curriculo:"+this.curriculo;
    }
    guardar(){
        //Almacenará el objeto en la BD
        arrayAlumnos.push(this)
    }
    actualizar(){
        for(i=0;i<arrayAlumnos.length;i++){
            if(arrayAlumnos[i].id==this.id){
                arrayAlumnos[i]=this;
            }
        }
    }
    eliminar(){
        for(i=0;i<arrayAlumnos.length;i++){
            if(arrayAlumnos[i].id==this.id){
                arrayAlumnoss.splice(i,1);
            }
        }
    }
    consultar(){
        for(i=0;i<arrayAlumnos.length;i++){
            if(arrayAlumnos[i].id==this.id){
                return arrayAlumnos[i];
            }
        }
        return null;
    }
}