var arrayCategoria=[];
class Categoria{
    constructor(id,nombre,nombreP,nombreM,empresa,trabajo){
        this.id=id;
        this.nombre=nombre;
        this.nombreP=nombreP;
        this.nombreM=nombreM;
        this.empresa=empresa;
        this.trabajo=trabajo;
    }
    tosString() {
        return "id:" + this.id + "nombre:" + this.nombre 
        + "padre" + this.nombreP + "madre" + this.nombreM 
        + "empresa" + this.empresa + "trabajo" + this.trabajo ;
    }
    guardar(){
        arrayCategoria.push(this)
    }
    actualizar(){
        for(i=0; i<arrayCategoria.length; i++){
            if(arrayCategoria[i].id==this.id){
                arrayCategoria[i]=this;
            }
        }
    }
    eliminar(){
        for(i=0; i<arrayCategoria.length; i++){
            if(arrayCategoria[i].id==this.id){
                delete arrayCategoria[i];
                arrayCategoria.splice(i,1);
            }
        }
    }
    consultar(){
        for(i=0;i<arrayCategoria.length;i++){
            if(arrayCategoria[i].id){
                return arrayCategoria[i];
            }
        }
        return null;
    }
}