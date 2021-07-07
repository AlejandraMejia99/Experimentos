function ConsultarUsuario(){
    var obj;
    obj=new Usuario();
    obj.consultar();
    document.getElementById("nombre").value=obj.nombre;
    document.getElementById("IdUsuario").value=obj.id;
    document.getElementById("sexo").value=obj.sexo;
    document.getElementById("telefono").value=obj.telefono;
    document.getElementById("email").value=obj.email;
    document.getElementById("password").value=obj.password;
}
function Agregar(){
    var obj;
    obj=new Usuario(
        document.getElementById("nombre").value,
        document.getElementById("IdUsuario").value,
        document.getElementById("sexo").value,
        document.getElementById("telefono").value,
        document.getElementById("email").value,
        document.getElementById("password").value
        );
    obj.guardar();
    Limpiar();
}
function Editar(){
    var obj;
    obj=new Usuario(
        document.getElementById("nombre").value,
        document.getElementById("IdUsuario").value,
        document.getElementById("sexo").value,
        document.getElementById("telefono").value,
        document.getElementById("email").value,
        document.getElementById("password").value
        );
    obj.actualizar();
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
var arrayUsuarios=[];
class Usuario{
    constructor(nombre,id,sexo,telefono,email,password) 
    {
        this.nombre=nombre;
        this.id=id;
        this.sexo=sexo;
        this.telefono=telefono;
        this.email=email;
        this.password=password;
    }
    toString() {
        return "nombre: "+this.nombre+" ID: "+this.id+" Telefono: "+this.telefono+" Email: "+this.email+" Password: "+this.password;
    }    
    guardar(){
        //Almacenará el objeto en la BD
        arrayUsuarios.push(this)
    }
    actualizar(){
        for(i=0;i<arrayUsuarios.length;i++){
            if(arrayUsuarios[i].id==this.id){
                arrayUsuarios[i]=this;
            }
        }
    }
    eliminar(){
        for(i=0;i<arrayUsuarios.length;i++){
            if(arrayUsuarios[i].id==this.id){
                //delete arrayUsuarios[i];
                arrayUsuarios.splice(i,1);
            }
        } 
    }
    consultar(){
        for(i=0;i<arrayUsuarios.length;i++){
            if(arrayUsuarios[i].id==this.id){
                return arrayUsuarios[i];
            }
        }
        return null;
    }
}