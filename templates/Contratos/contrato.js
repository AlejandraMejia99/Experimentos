function ConsultarContrato(){
    var obj;
    obj=new Contrato();
    obj.consultar();
    document.getElementById("IdContrato").value=obj.id;
    document.getElementById("Nombre").value=obj.nombre;
}
function Agregar(){
    var obj;
    obj=new Contrato(
        document.getElementById("IdContrato").value,
        document.getElementById("Nombre").value
        );
    obj.guardar();
    Limpiar();
}
function Limpiar(){
    document.getElementById("IdContrato").value="";
    document.getElementById("Nombre").value="";
}
var arrayContrato=[];
class Contrato{
    constructor(id,nombre) 
    {
        this.id=id;
        this.nombre=nombre;
    }
    toString() {
        return "ID: "+this.id+" Nombre: "+this.nombre;
    }    
    guardar(){
        //Almacenará el objeto en la BD
        arrayContrato.push(this)
    }
    actualizar(){
        for(i=0;i<arrayContrato.length;i++){
            if(arrayContrato[i].id==this.id){
                arrayContrato[i]=this;
            }
        }
    }
    eliminar(){
        for(i=0;i<arrayContrato.length;i++){
            if(arrayContrato[i].id==this.id){
                //delete arrayUsuarios[i];
                arrayContrato.splice(i,1);
            }
        } 
    }
    consultar(){
        for(i=0;i<arrayContrato.length;i++){
            if(arrayContrato[i].id==this.id){
                return arrayContrato[i];
            }
        }
        return null;
    }
}