function ConsultarCarrera(){
    var obj;
    obj=new Carrera();
    obj.consultar();
    document.getElementById("nombre").value=obj.nombre,
    document.getElementById("IdCarrera").value=obj.id,
    document.getElementById("Siglas").value=obj.siglas,
    document.getElementById("Creditos").value=obj.creditos,
    document.getElementById("Plan").value=obj.plan,
    document.getElementById("Especialidad").value=obj.especialidad,
    document.getElementById("noEmpleado").value=obj.noEmpleado
}
function Agregar(){
    var obj;
    obj=new Carrera(
        document.getElementById("nombre").value,
        document.getElementById("IdCarrera").value,
        document.getElementById("Siglas").value,
        document.getElementById("Creditos").value,
        document.getElementById("Plan").value,
        document.getElementById("Especialidad").value,
        document.getElementById("noEmpleado").value
        );
    obj.guardar();
    Limpiar();
}
function Limpiar(){
    document.getElementById("nombre").value="";
    document.getElementById("IdUsuario").value="";
    document.getElementById("sexo").value="";
    document.getElementById("telefono").value="";
    document.getElementById("email").value="";
    document.getElementById("password").value="";
}
var arrayCarrera=[];
class Carrera{
    constructor(nombre,id,siglas,creditos,plan,especialidad,noEmpleado) 
    {
        this.nombre=nombre;
        this.id=id;
        this.siglas=siglas;
        this.creditos=creditos;
        this.plan=plan;
        this.especialidad=especialidad;
        this.noEmpleado=noEmpleado;
    }
    toString() {
        return "nombre: "+this.nombre+" ID: "+this.id+" Siglas: "+this.siglas+" Creditos: "+this.creditos+
        +" Plan: "+this.plan+" Especialidad: "+this.especialidad+" NoEmpleado: "+this.noEmpleado;
    }    
    guardar(){
        //Almacenará el objeto en la BD
        arrayCarrera.push(this)
    }
    actualizar(){
        for(i=0;i<arrayCarrera.length;i++){
            if(arrayCarrera[i].id==this.id){
                arrayCarrera[i]=this;
            }
        }
    }
    eliminar(){
        for(i=0;i<arrayCarrera.length;i++){
            if(arrayCarrera[i].id==this.id){
                //delete arrayUsuarios[i];
                arrayCarrera.splice(i,1);
            }
        } 
    }
    consultar(){
        for(i=0;i<arrayCarrera.length;i++){
            if(arrayCarrera[i].id==this.id){
                return arrayCarrera[i];
            }
        }
        return null;
    }
}