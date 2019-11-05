
//titulo y H1
var titulo = 'Ariel Martin Desarrollador Web';
var subtitulo = '';

//subtitulo (menu lateral)
var parrafo = 'Egresado de la carrera de desarrollo web en la Universidad Nacional de la Matanza';

//avatar
var avatar = "images/am.png";

//menu
var one = "Home";
var two = "Aptitudes";
var three = "Trabajos";
var four = "Contacto";

//TEXTOS 

//titulo secundario H2
var titulo1 = ""; 
var subtitulo1 = "";
var parrafo1 ="";


var subtitulo2 = "Cosas que puedo hacer"; 
var parrafo2 = "";

var subtitulo3 = "Algunos de mis proyectos";
var parrafo3 = "Estos son algunos trabajos que he echo para mi o para terceros";

var subtitulo4 = "Contacto";
var parrafo4 = "";


//Descripcion proyectos:

//proyeto 1
var image1 = "images/gc.jpg"; 
var alt1 = "imagen de Gastronomia Casanova";
var url1 = "https://gastronomiacasanova.000webhostapp.com/";

//proyeto 2
var image2 = "images/ecommerce.jpg";
var alt2 = "imagen de E-commere";
var url2 = "pages/e-commerce/index.html";

//proyeto 3
var image3 = "images/credivi.jpg";
var alt3 = "imagen del sitio Credivi";
var url3 = "https://credivi.github.io/marketing/";

//redes
var facebook = "https://www.facebook.com/";
var instagram = "https://www.instagram.com/";
var youtube = "https://www.instagram.com/";
var whatsapp = "https://api.whatsapp.com/send?phone=5491157673825&text=Podras colocar tu mensaje aquí";
var mailto = "mailto:arielmartin80@gmail.com";
var github = "https://github.com/arielmartin80/";
var gitlab = "https://gitlab.com/arielmartin80/";
var linkedin = "https://www.linkedin.com/in/ariel-martin-705a3461";

//Formulario
var action = "https://docs.google.com/forms/u/1/d/e/1FAIpQLSenEQOKGiv8xJS-Pu7Tj_AetWqLqbSnvtW753eEddcE79ZFFw/formResponse";
var name = "entry.1440274532";
var emailAddress = "emailAddress";
var message = "entry.388888529";


/******************************************/
/***********  IMPLEMNTACION  **************/
/******************************************/


//menu
$(document).ready(function() {
   $(".one").text(one);
   $(".two").text(two);
   $(".three").text(three);
   $(".four").text(four);
});

//textos
$(document).ready(function() {
   $(".titulo").text(titulo);
   $(".subtitulo").text(subtitulo);
   $(".parrafo").text(parrafo);
   $(".titulo1").text(titulo1);
   $(".subtitulo1").text(subtitulo1);
   $(".parrafo1").text(parrafo1);
   $(".subtitulo2").text(subtitulo2);
   $(".parrafo2").text(parrafo2);
   $(".subtitulo3").text(subtitulo3);
   $(".parrafo3").text(parrafo3);
   $(".subtitulo4").text(subtitulo4);
   $(".parrafo4").text(parrafo4);
});

//redes
$(document).ready(function() {
   $(".linkedin").attr("href", linkedin);
   $(".github").attr("href", github);
   $(".gitlab").attr("href", gitlab);
   $(".whatsapp").attr("href", whatsapp);
   $(".mailto").attr("href", mailto)
});


//links
$(document).ready(function() {
   $("#url1").attr("href", url1);
   $("#url2").attr("href", url2);
   $("#url3").attr("href", url3);
});

//imagenes
$(document).ready(function() {
   $(".avatar").attr("src",avatar);
   $("#image1").attr("src",image1).attr("alt",alt1);
   $("#image2").attr("src",image2).attr("alt",alt2);
   $("#image3").attr("src",image3).attr("alt",alt3);
});

//Fomulario
$(document).ready(function() {
   $("#form").attr("action",action);
   $("#name").attr("name",name);
   $("#emailAddress").attr("name",emailAddress);
   $("#message").attr("name",message);
});

