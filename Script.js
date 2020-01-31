$( document ).ready(function() {
    $("#partie1").hide();
    $("#partie2").hide();

    $("#but1").click( function () {
        $(".intro").hide();
        $("#partie1").show();
       });
    
    $("#but2").click( function () {
        $("#partie1").hide();
        $("#partie2").show();
       });
    
    $("#but3").click( function () {
        $("#partie2").hide();
        $("#partie3").show();
       });
    
});