var contador=0;

function mostrarDiv(nombre){
    var otraVariable;
    otraVariable=5;
    var div=document.getElementById(nombre);
    div.style.display="block";
    contador++;
}

function ocultarDiv(nombre){
    var div=document.getElementById(nombre);
    div.style.display="none";
    if(contador>3)
    alert(contador);

}
function ocultarDivs(){
    ocultarDiv("datosEstructurales");

}

