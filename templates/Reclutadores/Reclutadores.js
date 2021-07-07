function validar(form){
    var cad=validarId(form.Id.value);
    cad+=validarNombre(form.nombre.value);
    cad+=validarTelefono(form.telefono.value);
    cad+=validarEmail(form.email.value);
    cad+=validarEmpresa(form.nombre.value);
    cad+=validarCargo(form.nombre.value);
    if(cad!=''){
        document.getElementById("notificaciones").innerHTML='<p>'+cad+'</p>';
        return false;
    }
    else{
       return true; 
    }
}
function validarId(cad){
    var patron=/\d{8}/;
    if(patron.test(cad)){
        return '';
    }
    else{
        return "El identificador debe ser de 8 dígitos <br>";
    }
}

function validarNombre(cad){
    if(cad.length==0){
        return 'Coloca el nombre del Reclutor.<br>';
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
            return 'El número de telefono no cumple el patrón ###-###-####.<br>';
       }
    }
    else{
        return 'El numero telefonico debe de contar con 12 digitos. <br>'
    }
}
function validarEmail(cad){
    var patron=/[a-z]\w*@\w+.\w+.*/;
    if(patron.test(cad)){
        return '';
    }
    else{
        return "La cuenta de correo electrónico no tiene el formato correcto. <br>";
    }
}

function validarEmpresa(cad){
    if(cad.length==0){
        return 'Debes informar el nombre de la empresa<br>';
    }
    else{
        return '';
    }
}
function validarCargogo(cad){
    if(cad.length==0){
        return 'Ingresa el cargo que desarrolalas<br>';
    }
    else{
        return '';
    }
}