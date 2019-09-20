function validar(){
	var mensaje="";
	var error=0;
	var regexemail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
	var regexdni =  /^[0-9]{8}$/;

	var nombre=$("#nombre").val();
	var apellido=$("#apellido").val();
	var dni=$("#dni").val();
	var email=$("#email").val();
	var comentario=$("#comentario").val();

	$("#mensaje").empty();

	if (nombre.length < 10 || nombre.length>20) {
		mensaje += "<p>El campo nombre no es valido</p>";
		error ++;
	}
	if (apellido.length < 10 || apellido.length>20) {
		mensaje += "<p>El campo apellido no es valido</p>";
		error ++;
	}
	if (!dni.match(regexdni)){
		mensaje+="Dni invalido<br>";
		error++;
	}
	if (!email.match(regexemail)){
		mensaje+="Email invalido<br>";
		error++;
	}
	if (comentario < 1) {
		mensaje += "<p>El comentario es obligatorio</p>";
		error ++;
	}




	if(error>0){
		$("#mensaje").append(mensaje);
		return false;
	}else{
		return true;
	}	
}