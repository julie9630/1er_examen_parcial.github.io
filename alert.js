//funciones para formulario de contacto
function ejecutar() {
	nombre=document.contacto.nombre.value;
	paterno=document.contacto.paterno.value;
	correo=document.contacto.correo.value; 

	if (nombre==false){
	document.contacto.nombre.style.background="red";
	alert("Error, se debe indicar un nombre");
		} else {
		if (paterno==false){
			document.contacto.paterno.style.background="red";
			alert("Error, se debe indicar un apellido paterno");
		} else {
			if (correo==false){
				document.contacto.correo.style.background="red";
				alert("Error, se debe indicar un correo electrónico");
			}
	  	}
    }
}

function nom(){
document.contacto.nombre.style.background="blue";}

function pat(){
document.contacto.paterno.style.background="blue";}

function corr(){
document.contacto.correo.style.background="blue";}

//funciones para formulario de registro
function ejecutar2 (){
	placas=document.registro.placas.value;
	marca=document.registro.marca.value;
	año=document.registro.año.value;

	if (placas==false) {
		document.registro.placas.style.background="red";
		alert("Error, se debe indicar las placas del vehículo");
	} else {
		if (marca==false) {
			document.registro.marca.style.background="red";
			alert("Error, se debe indicar la marca del vahículo");
		} else {
			if (año==false) {
				document.registro.año.style.background="red";
				alert("Error, se debe indicar el año del vehículo");
			}
		}
	}
}

function pla(){
document.registro.placas.style.background="blue";}

function mar(){
document.registro.marca.style.background="blue";}

function añ(){
document.registro.año.style.background="blue";}