var op="";
function mostrarDiv(id){
    document.getElementById(id).style.display="block";
}
function ocultarDiv(id){
    document.getElementById(id).style.display="none";
}
function InicioDivs(){
    mostrarDiv("listadoEmpresa");
    ocultarDiv("DatosEmpresa")
    consultaGeneral();
}
function nuevo(){
    op="a";
    document.getElementById("Titulo").innerHTML="<h1>Datos de empresa</h1>";
    ocultarDiv("listadoEmpresa");
    reset();
    mostrarDiv("DatosEmpresa")
}
function editar(id){
    op="b";
    document.getElementById("Titulo").innerHTML="<h1> Edicion de empresa</h1>";
    ocultarDiv("listadoEmpresa");
    reset();
    var obj=new Edificio(id,"");
    var obj2=obj.consultar();
    document.getElementById("id").value=obj2.id;
    document.getElementById("rfc").value=obj2.rfc;
    document.getElementById("direcion").value=obj2.direcion;
    document.getElementById("giro").value=obj2.giro;
    document.getElementById("paginaweb").value=obj2.paginaweb;
    mostrarDiv("DatosGuardado")
}
function CrearEmpresa(){
    var obj;
    switch(op){
        case "c":
        obj = new Categoria(
            document.getElementById("id").value,
            document.getElementById("rfc").value,
            document.getElementById("direcion").value,
            document.getElementById("giro").value,
            document.getElementById("paginaweb").value);
        obj.guardar();
        InicioDivs();
        break;
        case "c":
            obj = new Categoria(
                document.getElementById("id").value,
                document.getElementById("rfc").value,
                document.getElementById("direcion").value,
                document.getElementById("giro").value,
                document.getElementById("paginaweb").value);
        obj.actualizar();
        InicioDivs();
        break;
    }
}
function CancelaEmpresa(){
    InicioDivs();
}
function EliminarEmpresa(){
    var table=document.getElementById("datos");
    for(i=table.rows.length-1;i>0;i--){
        table.removeChild(table.rows[i])
    } 
}
function reset(){
    document.getElementById("id").value="";
    document.getElementById("rfc").value="";
    document.getElementById("direcion").value="";
    document.getElementById("giro").value="";
    document.getElementById("paginaweb").value="";
}