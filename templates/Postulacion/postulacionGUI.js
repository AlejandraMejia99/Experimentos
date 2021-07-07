var op="";
function mostrarDiv(id){
    document.getElementById(id).style.display="block";
}
function ocultarDiv(id){
    document.getElementById(id).style.display="none";
}
function InicioDivs(){
    mostrarDiv("listadopostulacion");
    ocultarDiv("DatosGuardados")
    consultaGeneral();
}
function nuevo(){
    op="a";
    document.getElementById("Titulo").innerHTML="<h1>Datos de la postulacion</h1>";
    ocultarDiv("listadopostulacion");
    reset();
    mostrarDiv("DatosGuardados")
}
function editar(id){
    op="b";
    document.getElementById("Titulo").innerHTML="<h1> Edicion de las postulacion</h1>";
    ocultarDiv("listadopostulacion");
    reset();
    var obj=new Postulacion(id,"");
    var obj2=obj.consultar();
    document.getElementById("idoferta").value=obj2.id;
    document.getElementById("fecha").value=obj2.rfc;
    document.getElementById("estatus").value=obj2.direcion;
    mostrarDiv("DatosGuardado")
}
function CrearPostulacion(){
    var obj;
    switch(op){
        case "c":
        obj = new Postulacion(
            document.getElementById("idoferta").value,
            document.getElementById("fecha").value,
            document.getElementById("estatus").value);
        obj.guardar();
        InicioDivs();
        break;
        case "c":
            obj = new Postulacion(
                document.getElementById("idoferta").value,
                document.getElementById("fecha").value,
                document.getElementById("estatus").value);
        obj.actualizar();
        InicioDivs();
        break;
    }
}
function CancelaPostulacion(){
    InicioDivs();
}
function EliminarPostulacion(){
    var table=document.getElementById("datos");
    for(i=table.rows.length-1;i>0;i--){
        table.removeChild(table.rows[i])
    } 
}
function reset(){
    document.getElementById("idoferta").value="";
    document.getElementById("fecha").value="";
    document.getElementById("estatus").value="";;
}