window.onload = function getData(){
	var xmlhttp; 
	if(window.XMLHttpRequest){ 
		xmlhttp = new XMLHttpRequest(); 
	} else{ 
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); 
	} 
	xmlhttp.onreadystatechange = function(){ 
		if(xmlhttp.readyState == 4){ 
			var linea = xmlhttp.responseText; 
			dividirCadena(linea, '\n');
		} 
	} 
	xmlhttp.open("GET", "https://github.com/AlejandroHR14/FestinurPrueba/blob/master/proyectos/datos/DatosGuardados.txt", true); 
	xmlhttp.send();
}



function dividirCadena(cadenaADividir,separador) {
   var arrayDeCadenas = cadenaADividir.split(separador);
   var str = arrayDeCadenas.toString();
   var aa = str.split(';');
   
   document.getElementById("titulo").innerHTML=aa[0];
   document.getElementById("integrante").innerHTML=aa[1];
   document.getElementById("video1").src=aa[2];
   //document.getElementById("video1").innerHTML = kk[2];
}
//            /proyectos/datos/DatosGuardados.txt