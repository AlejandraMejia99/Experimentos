var opcion="";

function mostrarDiv(id){
    document.getElementById(id).style.display="block";
}

function ocultarDiv(id){
    document.getElementById(id).style.display="none";
}
function inicializarDivs(){
    mostrarDiv("lstadoGeneral");
    ocultarDiv("datosIndividuales")
    consultaGeneral();
}
function nuevo(){
    opcion="c";
    document.getElementById("titulo").innerHTML="<h1> Registro de Ofertas </h1>";
    ocultarDiv("listadoGeneral");
    resizeTo();
    mostrarDiv("datosIndividuales")
}
function editar(id){
    opcion="u";
    document.getElementById("titulo").innerHTML="<h1> Edicion de  Ofertas</h1>";
    ocultarDiv("listadoGeneral");
    reset();
    var obj=new Ofertas(id,"","","","","","");
    var obj2=obj.consultar();
    document.getElementById("id").value=obj2.id;
    document.getElementById("fechanacimiento").value=obj2.fechanacimiento;
    document.getElementById("promedio").value=obj2.promedio;
    document.getElementById("anioegreso").value=obj2.anioegreso;
    document.getElementById("curriculo").value=obj2.curriculo;
    mostrarDiv("datosInviduales")
}

function GuardarDatos(){
    var obj;
    switch(opcion){
        case "c":
            obj=new Alumnos(
                document.getElementById("id").value,
                document.getElementById("fechanacimiento").value,
                document.getElementById("promedio").value,
                document.getElementById("anioegreso").value,
                document.getElementById("curriculo").value);
            obj.guardar();
            inicializarDivs();
            break;
        case "u":
            obj=new Alumnos(
                document.getElementById("id").value,
                document.getElementById("fechanacimiento").value,
                document.getElementById("promedio").value,
                document.getElementById("anioegreso").value,
                document.getElementById("curriculo").value);
            obj.actualizar();
            inicializarDivs();
            break;
    }
}
function consultaGeneral(){
    var table=document.getElementById("datos");
    eliminarTabla();
    for(i=0;i<arrayAlumnos.length;i++){
        var tr=document.createElement("tr");
        var objeto=arrayAlumnos[i];
        for(p in objeto){
           var td=document.createElement("td");
           var txt=document.createTextNode(objeto[p]);
           td.appendChild(txt);
           tr.appendChild(td);

        }
        var link=crearLink(arrayAlumnos[i].id,"editar");
        var td=document.createElement("td");
        td.appendChild(link);
        tr.appendChild(td)
        link=crearLink(arrayAlumnos[i].id,"eliminar");
        td=document.createElement("td");
        td.appendChild(link);
        tr.appendChild(td)
        table.appendChild(tr);
    }
}

function cancelar(){
    inicializarDivs();
}
function eliminarTabla(){
    var table=document.getElementById("datos");
    for(i=table.rows.length-1;i>0;i--){
        table.removeChild(table.rows[i])
    }
}
function reset(){
    document.getElementById("id").value="";
    document.getElementById("fechanacimiento").value="";
    document.getElementById("promedio").value="";
    document.getElementById("anioegreso").value="";
    document.getElementById("curriculo").value="";
}