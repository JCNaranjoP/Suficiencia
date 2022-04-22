var secciones = [];
var rutas = ["","index", "about", "contact","registro"];
var usuario_logeado = true;
var resultado;

window.onload = init;

function init(){
    asignarVariables();
    asignarEventos();

    
}





function asignarVariables(){
    resultado = document.getElementById("resultado");
    secciones["seccion_1"] = document.getElementById("seccion_1");
    secciones["seccion_2"] = document.getElementById("seccion_2");
    secciones["seccion_3"] = document.getElementById("seccion_3");
    secciones["seccion_4"] = document.getElementById("seccion_4");
}

function asignarEventos(){
    var temp;
    for(var i in secciones)
    {
        temp = secciones[i];
        temp.addEventListener("click", navegacion);
    }
}

function navegacion(event){
    var id = event.target.id;
    var indice = id.split("_")[1];
    var ruta = rutas[indice]+".html";
    
        location.href = ruta;
   
}

