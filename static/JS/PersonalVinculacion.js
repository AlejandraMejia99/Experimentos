var arrayPersonalVinculacion=[];
class Alumnos{

    constructor(id,cargo) //son los campos que llega a pedir
    {
        this.id=id;
        this.cargo=cargo;
    }
    toString() {
        return "id:"+this.id+
        ",cargo:"+this.cargo;
    }
    guardar(){
        //Almacenará el objeto en la BD
        arrayPersonalVinculacion.push(this)
    }
    actualizar(){
        for(i=0;i<arrayPersonalVinculacion.length;i++){
            if(arrayPersonalVinculacion[i].id==this.id){
                arrayPersonalVinculacion[i]=this;
            }
        }
    }
    eliminar(){
        for(i=0;i<arrayPersonalVinculacion.length;i++){
            if(arrayPersonalVinculacion[i].id==this.id){
                arrayPersonalVinculacion.splice(i,1);
            }
        }
    }
    consultar(){
        for(i=0;i<arrayPersonalVinculacion.length;i++){
            if(arrayPersonalVinculacion[i].id==this.id){
                return arrayPersonalVinculacion[i];
            }
        }
        return null;
    }
}