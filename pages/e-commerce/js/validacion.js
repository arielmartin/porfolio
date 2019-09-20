
function validar(){
	var regexemail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
	var regexdni =  /^[0-9]{8}$/;
	var mensaje ="";
	var error = 0;
	document.getElementById('mensaje').innerHTML = "";

	var nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var dni = document.getElementById("dni").value;
	var email = document.getElementById("email").value;
	var comentario = document.getElementById("comentario").value;



	if (nombre.length < 10 || nombre.length>20) {
		mensaje += "<p>El campo nombre no es valido</p>";
		error ++;
	}
	if (apellido.length < 10 || apellido.length>20) {
		mensaje += "<p>El campo apellido no es valido</p>";
		error ++;
	}
	if(!(regexdni).test(dni)){
		mensaje += "<p>El campo dni no es valido</p>";
		error ++;
	}

	if (!(regexemail).test(email)){
		mensaje += "<p>El campo email no es valido</p>";
		error ++;
	}
	if (comentario < 1) {
		mensaje += "<p>El comentario es obligatorio</p>";
		error ++;
	}


	if (error > 0) {
		document.getElementById("mensaje").innerHTML = mensaje;
		return false;
	}else{
		return true;
	}
}

