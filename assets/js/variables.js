/******************************************/
/***********  IMPLEMNTACION  **************/
/******************************************/

//menu
var one = "Home";
var two = "Aptitudes";
var three = "Proyectos";
var four = "Contacto";

$(document).ready(function() {
   $(".one").text(one);
   $(".two").text(two);
   $(".three").text(three);
   $(".four").text(four);
});


//avatar
var avatar = "images/am.png";

$(document).ready(function() {
   $(".avatar").attr("src",avatar);
});


//TEXTOS

//titulo y H1
var titulo = 'Ariel Martin Desarrollador Web';
var subtitulo = '';

//subtitulo (menu lateral)
var parrafo = 'Egresado de la carrera de desarrollo web en la Universidad Nacional de la Matanza';

//titulo secundario H2
var titulo1 = ""; 
var subtitulo1 = "";
var parrafo1 ="";


var subtitulo2 = "Cosas que puedo hacer"; 
var parrafo2 = "";

var subtitulo3 = "Algunos de mis proyectos";
var parrafo3 = "Estos son algunos trabajos que he hecho para mí o para terceros. Algunos de manera personal y otros en equipo.";

var subtitulo4 = "Contacto";
var parrafo4 = "Por medio de este formulario puedes enviarme un mensaje directo a mi email \"arielmartin80@gmail\"";

//textos de la pagina
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




//Descripcion proyectos:

//proyeto 1
var title1 = "Gastronomia Casanova";
var par1 = "";
var image1 = "images/gc.jpg"; 
var alt1 = "imagen de Gastronomia Casanova";
var url1 = "https://gastronomiacasanova.000webhostapp.com/";
var source1 = "https://github.com/arielmartin80/gastronomiacasanova";

$(document).ready(function() {
   $("#title1").text(title1);
   //$("#par1").text(par1);
   $("#url1").attr("href", url1);
   $(".source1").attr("href", source1);
   $("#image1").attr("src",image1).attr("alt",alt1);
});


//proyeto 2
var title2 = "Prototipo E-Commerce";
var par2 = "";
var image2 = "images/ecommerce.jpg";
var alt2 = "imagen de E-commere";
var url2 = "pages/e-commerce/index.html";
var source2 = "https://github.com/arielmartin/porfolio/tree/master/pages/e-commerce";

$(document).ready(function() {
   $("#title2").text(title2);
   //$("#par2").text(par2);
   $("#url2").attr("href", url2);
   $(".source2").attr("href", source2);
   $("#image2").attr("src",image2).attr("alt",alt2);
});


//proyeto 3
var title3 = "Credivi";
var par3 = "";
var image3 = "images/credivi.jpg";
var alt3 = "imagen del sitio Credivi";
var url3 = "https://credivi.github.io/marketing/";
var source3 = "https://github.com/credivi/marketing";

$(document).ready(function() {
   $("#title3").text(title3);
   //$("#par3").text(par3);
   $("#url3").attr("href", url3);
   $(".source3").attr("href", source3);
   $("#image3").attr("src",image3).attr("alt",alt3);
});


//proyeto 4
var title4 = "Evaluate";
var par4 = "";
var image4 = "images/evaluate.jpg";
var alt4 = "imagen del sitio evaluate";
var url4 = "https://evaluacionpersonal.000webhostapp.com/view/home_empleado.php";
var source4 = "https://github.com/arielmartin/evaluate";

$(document).ready(function() {
   $("#title4").text(title4);
   //$("#par4").text(par4);
   $("#url4").attr("href", url4);
   $(".source4").attr("href", source4);
   $("#image4").attr("src",image4).attr("alt",alt4);
});


//proyeto 5
var title5 ="CRUD PHP-MySql";
var par5 ="Código desarrollado para optimizar las operaciones entre PHP y MySql recibiendo como entrada de datos ARRAYS y realizando las operaciones de CRUD requeridas.";
var image5 = "images/codigo.jpg";
var alt5 = "imagen de codigo";
var url5 = "https://github.com/arielmartin80/helper_sql/blob/master/helper_sql.php";
var source5 = "https://github.com/arielmartin80/helper_sql/blob/master/helper_sql_v2.php";

$(document).ready(function() {
   $("#title5").text(title5);
   $("#par5").text(par5);
   $("#url5").attr("href", url5);
   $(".source5").attr("href", source5);
   $("#image5").attr("src",image5).attr("alt",alt5);
});


//proyeto 6
var title6 = "";
var par6 = "";
var image6 = "images/nutricion.jpg";
var alt6 = "imagen de proyecto nutricion";
var url6 = "https://github.com/arielmartin/control-nutricional";
var source6 = "https://github.com/arielmartin/control-nutricional";

$(document).ready(function() {
   //$("#title6").text(title6);
   //$("#par6").text(par6);
   $("#url6").attr("href", url6);
   $(".source6").attr("href", source6);
   $("#image6").attr("src",image6).attr("alt",alt6);
});


//proyeto 7
var title7 = "Ariel Martin - Técnico Informático";
var par7 = "Landing Page comercial propia. Desarrollada en HTML5, hospeada en GitHub Pages y redireccionada a mi dominio personal \"arielmartin.tk\"";
var image7 = "images/ti.jpg";
var alt7 = "imagen de proyecto it";
var url7 = "https://arielmartin.tk";
var source7 = "https://github.com/arielmartin/informatica";

$(document).ready(function() {
   $("#title7").text(title7);
   $("#par7").text(par7);
   $("#url7").attr("href", url7);
   $(".source7").attr("href", source7);
   $("#image7").attr("src",image7).attr("alt",alt7);
});



//Formulario de contacto
var action = "https://docs.google.com/forms/u/1/d/e/1FAIpQLSenEQOKGiv8xJS-Pu7Tj_AetWqLqbSnvtW753eEddcE79ZFFw/formResponse";
var name = "entry.1440274532";
var emailAddress = "emailAddress";
var message = "entry.388888529";

$(document).ready(function() {
   $("#form").attr("action",action);
   $("#name").attr("name",name);
   $("#emailAddress").attr("name",emailAddress);
   $("#message").attr("name",message)
});


//links a redes
$(document).ready(function() {
   $(".linkedin").attr("href", linkedin);
   $(".github").attr("href", github);
   $(".gitlab").attr("href", gitlab);
   $(".whatsapp").attr("href", whatsapp);
   $(".mailto").attr("href", mailto)
});

var facebook = "";
var instagram = "";
var youtube = "";
var whatsapp = "https://api.whatsapp.com/send?phone=5491157673825&text=Ud se está contactando con Ariel Martin, Desarrollador Web";
var mailto = "mailto:arielmartin80@gmail.com";
var github = "https://github.com/arielmartin80/";
var gitlab = "https://gitlab.com/arielmartin80/";
var linkedin = "https://www.linkedin.com/in/ariel-martin-705a3461";
