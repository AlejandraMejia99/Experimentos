
var arrayOfertas=[];
class Ofertas{

    constructor(id,nombre,descripcion,fechapublicacions,salario,numVacantes,status) //son los campos que llega a pedir
    {
        this.id=id;
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.fechapublicacions=fechapublicacions;
        this.salario=salario;
        this.numVacantes=numVacantes;
        this.status=status;
    }
    toString() {
        return "id:"+this.id+",nombre:"+this.nombre+
        ",descripcion:"+this.descripcion+
        ",fechapublicacions:"+this.fechapublicacions+
        ",salario:"+this.salario+
        ",numVacantes:"+this.numVacantes+
        ",status"+this.status;

    }
    guardar(){
        //Almacenará el objeto en la BD
        arrayAlumnos.push(this)
    }
    actualizar(){
        for(i=0;i<arrayOfertas.length;i++){
            if(arrayOfertas[i].id==this.id){
                arrayOfertas[i]=this;
            }
        }
    }
    eliminar(){
        for(i=0;i<arrayOfertas.length;i++){
            if(arrayOfertas[i].id==this.id){
                arrayOfertas.splice(i,1);
            }
        }
    }
    consultar(){
        for(i=0;i<arrayOfertas.length;i++){
            if(arrayOfertas[i].id==this.id){
                return arrayOfertas[i];
            }
        }
        return null;
    }
}