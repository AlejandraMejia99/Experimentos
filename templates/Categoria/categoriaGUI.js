var op="";
function mostrarDiv(id){
    document.getElementById(id).style.display="block";
}
function ocultarDiv(id){
    document.getElementById(id).style.display="none";
}
function InicioDivs(){
    mostrarDiv("listadoCategoria");
    ocultarDiv("DatosGuardado")
    consultaGeneral();
}
function nuevo(){
    op="a";
    document.getElementById("Titulo").innerHTML="<h1>Datos de postulante</h1>";
    ocultarDiv("listadoCategoria");
    reset();
    mostrarDiv("DatosGuardado")
}
function editar(id){
    op="b";
    document.getElementById("Titulo").innerHTML="<h1> Edicion de postulante</h1>";
    ocultarDiv("listadoCategoria");
    reset();
    var obj=new Edificio(id,"");
    var obj2=obj.consultar();
    document.getElementById("id").value=obj2.id;
    document.getElementById("nombre").value=obj2.nombre;
    document.getElementById("nombreP").value=obj2.nombreP;
    document.getElementById("nombreM").value=obj2.nombreM;
    document.getElementById("empresa").value=obj2.empresa;
    document.getElementById("trabajo").value=obj2.trabajo;
    mostrarDiv("DatosGuardado")
}
function CrearCategoria(){
    var obj;
    switch(op){
        case "c":
        obj = new Categoria(
            document.getElementById("id").value,
            document.getElementById("nombre").value,
            document.getElementById("nombreP").value,
            document.getElementById("nombreM").value,
            document.getElementById("empresa").value,
            document.getElementById("trabajo").value);
        obj.guardar();
        InicioDivs();
        break;
        case "c":
            obj = new Categoria(
            document.getElementById("id").value,
            document.getElementById("nombre").value,
            document.getElementById("nombreP").value,
            document.getElementById("nombreM").value,
            document.getElementById("empresa").value,
            document.getElementById("trabajo").value);
        obj.actualizar();
        InicioDivs();
        break;
    }
}
function CancelaCategoria(){
    InicioDivs();
}
function EliminarCategoria(){
    var table=document.getElementById("datos");
    for(i=table.rows.length-1;i>0;i--){
        table.removeChild(table.rows[i])
    } 
}
function reset(){
    document.getElementById("id").value="";
    document.getElementById("nombre").value="";
    document.getElementById("nombreP").value="";
    document.getElementById("nombreM").value="";
    document.getElementById("empresa").value="";
    document.getElementById("trabajo").value="";
}