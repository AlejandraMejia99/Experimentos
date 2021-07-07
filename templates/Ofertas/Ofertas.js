function validar(form){
    var cad=validarIdentificador(form.Id.value);
    cad+=validarNombre(form.nombre.value);
    cad+=validarDescripcion(form.descripcion.value);
    cad+=validarFechaP(form.fechapublicacions.value);
    cad+=validarSalario(form.salario.value);
    cad+=validarVacantes(form.numVacantes.value);
    cad+=validarCategoria(parseInt(form.categoria.options[form.categoria.options.selectedIndex].value));
    cad+=validarContratacion(parseInt(form.contratacion.options[form.contratacion.options.selectedIndex].value));
    cad+=validarNEmpresa(form.nombreEmp.value);
    cad+=validarReclutador(form.nombreRe.value);
    if(cad!=''){
        document.getElementById("notificaciones").innerHTML='<p>'+cad+'</p>';
        return false;
    }
    else{
       return true; 
    }
}

function validarIdentificador(cad){
    var patron=/\d{8}/;
    if(patron.test(cad)){
        return '';
    }
    else{
        return "El identificador  debe ser de 8 dígitos <br>";
    }
}
function validarNombre(cad){
    if(cad.length==0){
        return 'Debes informar el nombre de la Oferta.<br>';
    }
    else{
        return '';
    }
}

function validarDescripcion(cad){
    if(cad.length==0){
        return 'Debes describir la Oferta.<br>';
    }
    else{
        return '';
    }
}

function validarFechaP(fechapublicacions){
    var fecha=new Date();
    var fechapublicacions=fecha.getFullYear();
    if(fechapublicacions>fechactual){
        return 'El año de egreso no debe ser mayor a:'+actual+"<br>";
    }
    return '';
}


function validarSalario(valor){
    if(valor>=1 && valor<=5000){
        return '';
    }
    else{
        return "El salario exceden el rango de pago <br>"
    }
}
function validarVacantes(valor){
    if(valor>=1 && valor<=20){
        return '';
    }
    else{
        return "El numero de vacantes exceden el rango de vancantes <br>"
    }
}
function validarCategoria(valor){
    if(valor==0){
        return 'Debes elegir una Categoria<br>';
    }
    return '';
}
function validarContratacion(valor){
    if(valor==0){
        return 'Debes elegir un tipo de contratacio<br>';
    }
    return '';
}
function validarNEmpresa(cad){
    if(cad.length==0){
        return 'Debes informar el nombre de la Empresa que realiza la oferta<br>';
    }
    else{
        return '';
    }
}
function validarReclutador(cad){
    if(cad.length==0){
        return 'Debes informar el nombre del reclutador encrgado.<br>';
    }
    else{
        return '';
    }
}
