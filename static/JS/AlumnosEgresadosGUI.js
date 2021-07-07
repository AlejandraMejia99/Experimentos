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
    document.getElementById("titulo").innerHTML="<h1> Registro de Alumnos </h1>";
    ocultarDiv("listadoGeneral");
    resizeTo();
    mostrarDiv("datosIndividuales")
}
function editar(id){
    opcion="u";
    document.getElementById("titulo").innerHTML="<h1> Edicion de Alumnos</h1>";
    ocultarDiv("listadoGeneral");
    reset();
    var obj=new Alumnos(id,"");
    var obj2=obj.consultar();
    document.getElementById("id").value=obj2.id;
    document.getElementById("nombre").value=obj2.nombre;
    mostrarDiv("datosInviduales")
}


function GuardarDatos(){
    var obj;
    switch(opcion){
        case "c":
            obj=new Alumnos(
                document.getElementById("id").value,
                document.getElementById("nombre").value);
            obj.guardar();    
            inicializarDivs();
            break;
        case "u":
            obj=new Alumnos(
                document.getElementById("id").value,
                document.getElementById("nombre").value);
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
    document.getElementById("nombre").value="";
}