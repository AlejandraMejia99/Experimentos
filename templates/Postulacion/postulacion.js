var arrayPostulacion=[];
class Empresa{
    constructor(id,fecha,estatus){
        this.id=id;
        this.fecha=fecha;
        this.estatus=estatus;
    }
    tosString() {
        return "idoferta:" + this.id + "fecha:" + this.fecha 
        + "estatus:" + this.estatus;
    }
    guardar(){
        arrayPostulacion.push(this)
    }
    actualizar(){
        for(i=0; i<arrayPostulacion.length; i++){
            if(arrayPostulacion[i].id==this.id){
                arrayPostulacion[i]=this;
            }
        }
    }
    eliminar(){
        for(i=0; i<arrayPostulacion.length; i++){
            if(arrayPostulacion[i].id==this.id){
                delete arrayPostulacion[i];
                arrayPostulacion.splice(i,1);
            }
        }
    }
    consultar(){
        for(i=0;i<arrayPostulacion.length;i++){
            if(arrayPostulacion[i].id){
                return arrayPostulacion[i];
            }
        }
        return null;
    }
}