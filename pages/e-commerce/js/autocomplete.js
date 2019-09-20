  //autocomplete
  $( function() {
    var availableTags = [
      "Intel core i5",
      "iPad Mini 2",
      "iPhone 8 32GB",
      "Kaspersky Antivirus 2017",
      "Macbook Pro '13 i5",
      "Memoria RAM 4 GB",
      "Micro Amd Apu A4-4000",
      "Micro Amd Apu A8",
      "Mother Msi A68hm-e33 ",
      "Nintendo Switch ",
      "Notebook Dell i5",
      "Notebook HP i7",
      "Pc Dell i5 4GB ",
      "Pendrive HP 16GB"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });

  });

//contador carrito
  $(document).ready(function() {
      var numero=0;
      $(".sumar").click(function() {
          numero++;
          $("#contador").text(numero);
      });
      $(".carrito").click(function() {
          numero++;
          $("#contador").text(numero);
      });
      $(".reestablecer").click(function() {
          numero=0;
          $("#contador").text(numero);
      });
});