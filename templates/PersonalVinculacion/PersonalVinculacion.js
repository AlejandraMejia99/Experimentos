function validar(form){
    var cad=validarNE(form.nempleado.value);
    cad+=validarNombre(form.nombre.value);
    cad+=validarTelefono(form.telefono.value);
    cad+=vlidarEmail(form.email.value);
    cad+=validarCargo(form.cargo.value);
    if(cad!=''){
        document.getElementById("notificaciones").innerHTML='<p>'+op+'</p>';
        return false
    }else{
        return true;
    }
    
}

function validarNE(cad){
    var patron=/\d{5}/;
    if(patron.test(cad)){
        return '';
    }
    else{
        return "El numero de empleado debe ser minimo  de 5 dígitos <br>";
    }
    
}
function validarNombre(cad){
    if(cad.length==0){
        return 'Ingrese el Nombre del Reclutor.<br>';
    }
    else{
        return '';
    }

}

function validarTelefono(cad){
    var ban=false;
    if(cad.length==12){    
       var patron=/\d{3}-\d{3}-\d{4}/;
       if(patron.test(cad)){
           return '';
       } 
       else{
            return 'El número de telefono no cumple el patrón solicitado <br>';
       }
    }
    else{
        return 'El telefono debe ser de 12 caracteres. <br>'
    }
}

function validarCargo(cad){

if(cad.length==0){
        return 'Debes informar el cargo que desempena el reclutor.<br>';
    }
    else{
        return '';
    }
}
