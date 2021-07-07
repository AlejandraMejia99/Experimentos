function consultar(){
    var ajax=new XMLHttpRequest();
    ajax.onreadystatechange=function(){
        if(this.status==200 && this.readyState==4){
            var option=JSON.parse(this.responseText);
            document.getElementById("nombre").value=option.nombre;
            document.getElementById("IdUsuario").value=option.IdUsuario;
            document.getElementById("sexo").value=option.sexo;
            document.getElementById("telefono").value=option.telefono;
            document.getElementById("email").value=option.email;
            document.getElementById("password").value=option.password;
        }
    };
    ajax.open("Get","usuarios.txt",true);
    ajax.send();
}