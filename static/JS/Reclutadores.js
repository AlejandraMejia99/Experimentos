var arrayReclutador=[];

class Reclutador{

    constructor(id,idEmpresa,cargo) //son los campos que llega a pedir
    {
        this.id=id;
        this.idEmpresa=idEmpresa;
        this.cargo=cargo;
      ;
    }
    toString() {
        return "id:"+this.id+",idEmpresa:"+this.idEmpresa+
        ",cargo:"+this.cargo;

    }
    guardar(){
        //Almacenará el objeto en la BD
        arrayReclutador.push(this)
    }
    actualizar(){
        for(i=0;i<arrayReclutador.length;i++){
            if(arrayReclutador[i].id==this.id){
                arrayReclutador[i]=this;
            }
        }
    }
    eliminar(){
        for(i=0;i<arrayReclutador.length;i++){
            if(arrayReclutador[i].id==this.id){
                arrayReclutador.splice(i,1);
            }
        }
    }
    consultar(){
        for(i=0;i<arrayReclutador.length;i++){
            if(arrayReclutador[i].id==this.id){
                return arrayReclutador[i];
            }
        }
        return null;
    }
}