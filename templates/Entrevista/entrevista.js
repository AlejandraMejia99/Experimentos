function ConsultarEntrevista(){
    var obj;
    obj=new Entrevista();
    obj.consultar();
    document.getElementById("IdEntrevista").value=obj.idEnt;
    document.getElementById("IdReclutor").value=obj.idRec;
    document.getElementById("IdCandidato").value=obj.idCan;
    document.getElementById("FechaRegistro").value=obj.FechaReg;
    document.getElementById("FechaEntrevista").value=obj.FechaEnt;
    document.getElementById("HoraInicio").value=obj.HoraIni;
    document.getElementById("HoraFin").value=obj.HoraFin;
    document.getElementById("Estatus").value=obj.Estatus;
    document.getElementById("Oferta").value=obj.Oferta;
}
function Agregar(){
    var obj;
    obj=new Entrevista(
        document.getElementById("IdEntrevista").value,
        document.getElementById("IdReclutor").value,
        document.getElementById("IdCandidato").value,
        document.getElementById("FechaRegistro").value,
        document.getElementById("FechaEntrevista").value,
        document.getElementById("HoraInicio").value,
        document.getElementById("HoraFin").value,
        document.getElementById("Estatus").value,
        document.getElementById("Oferta").value
        );
    obj.guardar();
    Limpiar();
}
function Editar(){
    var obj;
    obj=new Entrevista(
        document.getElementById("IdEntrevista").value,
        document.getElementById("IdReclutor").value,
        document.getElementById("IdCandidato").value,
        document.getElementById("FechaRegistro").value,
        document.getElementById("FechaEntrevista").value,
        document.getElementById("HoraInicio").value,
        document.getElementById("HoraFin").value,
        document.getElementById("Estatus").value,
        document.getElementById("Oferta").value
        );
    obj.actualizar();
    Limpiar();
}
function Limpiar(){
    document.getElementById("IdEntrevista").value="";
    document.getElementById("IdReclutor").value="";
    document.getElementById("IdCandidato").value="";
    document.getElementById("FechaRegistro").value="";
    document.getElementById("FechaEntrevista").value="";
    document.getElementById("HoraInicio").value="";
    document.getElementById("HoraFin").value="";
    document.getElementById("Estatus").value="";
    document.getElementById("Oferta").value="";
}
var arrayEntrevista=[];
class Entrevista{
    constructor(idEnt,idRec,idCan,FechaReg,FechaEnt,HoraIni,HoraFin,Estatus,Oferta) 
    {
        this.idEnt=idEnt;
        this.idRec=idRec;
        this.idCan=idCan;
        this.FechaReg=FechaReg;
        this.FechaEnt=FechaEnt;
        this.HoraIni=HoraIni;
        this.HoraFin=HoraFin;
        this.Estatus=Estatus;
        this.Oferta=Oferta;
    }
    toString() {
        return "IdEntrevista: "+this.idEnt+" IdReclutor: "+this.idRec+" IdCandidato: "+this.idCan+
        +" FechaRegistro: "+this.FechaReg+" FechaEntrevista: "+this.FechaEnt+" HoraInicio: "+this.HoraIni+
        +" HoraFin: "+this.HoraFin+" Estatus: "+this.Estatus+" Oferta: "+this.Oferta;
    }    
    guardar(){
        //Almacenará el objeto en la BD
        arrayEntrevista.push(this)
    }
    actualizar(){
        for(i=0;i<arrayEntrevista.length;i++){
            if(arrayEntrevista[i].id==this.id){
                arrayEntrevista[i]=this;
            }
        }
    }
    eliminar(){
        for(i=0;i<arrayEntrevista.length;i++){
            if(arrayEntrevista[i].id==this.id){
                //delete arrayUsuarios[i];
                arrayEntrevista.splice(i,1);
            }
        } 
    }
    consultar(){
        for(i=0;i<arrayEntrevista.length;i++){
            if(arrayEntrevista[i].id==this.id){
                return arrayEntrevista[i];
            }
        }
        return null;
    }
}