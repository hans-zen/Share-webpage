/*CASO1*/

$(document).ready(function(){


  $("#si1").click(function(){
    $("#pregunta1").hide();
    $("#fin1").css('display','block');
  });

  $("#no1").click(function(){
    $("#pregunta1").hide();
    $("#pregunta2").css('display','block');
  });

  $("#si2").click(function(){
    $("#pregunta2").hide();
    $("#pregunta3").css('display','block');
  });

  $("#no2").click(function(){
    $("#pregunta2").hide();
    $("#fin2").css('display','block');
  });

   $("#grupo").click(function(){
    $("#pregunta3").hide();
    $("#fin3").css('display','block');
  });

   $("#amigo").click(function(){
    $("#pregunta3").hide();
    $("#fin4").css('display','block');
  });

});

/*CASO2*/
/*
$(document).ready(function(){
  $("#si1").click(function(){
    $("#paso2").hide();
    $("#paso3").css('display','block');
  });
});
*/