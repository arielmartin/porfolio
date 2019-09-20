$(document).ready(function() {

sub1=0; sub2=0; sub3=0; sub4=0; sub5=0;

    $("#cant1").change(function() {
        var precio=$("#precio1").val();
        var cant=$("#cant1").val();
        sub1=precio*cant;
       $("#subtotal1").text("$ "+sub1);
     
    });

    $("#cant2").change(function() {
        var precio=$("#precio2").val();
        var cant=$("#cant2").val();
        sub2=precio*cant;
        $("#subtotal2").text("$ "+sub2);
    });

    $("#cant3").change(function() {
        var precio=$("#precio3").val();
        var cant=$("#cant3").val();
        sub3=precio*cant;
        $("#subtotal3").text("$ "+sub3);
    });

    $("#cant4").change(function() {
        var precio=$("#precio4").val();
        var cant=$("#cant4").val();
        sub4=precio*cant;
        $("#subtotal4").text("$ "+sub4);
    });

    $("#cant5").change(function() {
        var precio=$("#precio5").val();
        var cant=$("#cant5").val();
        sub5=precio*cant;
        $("#subtotal5").text("$ "+sub5);
    });

    $("input[id*='cant']").change(function(){
       total=sub1+sub2+sub3+sub4+sub5;
        $("#total").text("$ "+total);

    });
});