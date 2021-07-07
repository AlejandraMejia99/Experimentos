function cargarOpcion(){
    var ajax=new XMLHttpRequest();
    ajax.onreadystatechange=function(){
        if(this.status==200 && this.readyState==4){
            alert(this.responseText);
        }
    };
    ajax.open("Get","ofertas_Ajax.txt",true);
    ajax.send();
}