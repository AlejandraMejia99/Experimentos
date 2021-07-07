var arrayEmpresa=[];
class Empresa{
    constructor(id,rfc,direcion,giro,paginaweb){
        this.id=id;
        this.rfc=rfc;
        this.direcion=direcion;
        this.giro=giro;
        this.paginaweb=paginaweb;
    }
    tosString() {
        return "id:" + this.id + "rfc:" + this.rfc 
        + "direcion:" + this.direcion + "giro:" + this.giro 
        + "paginaweb" + this.paginaweb;
    }
    guardar(){
        arrayEmpresa.push(this)
    }
    actualizar(){
        for(i=0; i<arrayEmpresa.length; i++){
            if(arrayEmpresa[i].id==this.id){
                arrayEmpresa[i]=this;
            }
        }
    }
    eliminar(){
        for(i=0; i<arrayEmpresa.length; i++){
            if(arrayEmpresa[i].id==this.id){
                delete arrayEmpresa[i];
                arrayEmpresa.splice(i,1);
            }
        }
    }
    consultar(){
        for(i=0;i<arrayEmpresa.length;i++){
            if(arrayEmpresa[i].id){
                return arrayEmpresa[i];
            }
        }
        return null;
    }
}