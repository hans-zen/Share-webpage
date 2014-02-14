/*CASO1*/
var valid = false
var url = ""
$(document).ready(function(){

	var re = /^(?:ftp|http|https):\/\/(?:[\w\.\-\+]+:{0,1}[\w\.\-\+]*@)?(?:[a-z0-9\-\.]+)(?::[0-9]+)?(?:\/|\/(?:[\w#!:\.\?\+=&%@!\-\/\(\)]+)|\?(?:[\w#!:\.\?\+=&%@!\-\/\(\)]+))?$/

	$("#oneurl").keyup(function(){
		
		var urlValid =  re.test( $(this).val() ) ? "Url valida" : "Introduce una URL valida"
		valid =  re.test( $(this).val() ) ? true : false
		if (valid) {
			url = $(this).val()
		}
		//console.log( urlValid )
		$(".labelURL").html( urlValid )
	})

	$("#si1").click(function(){
		if (valid) {
			$("#pregunta1").hide();
			$("#fin1").css('display','block');
		}
		else
			$("#validateLabel").html("Creo que olvidaste escribir una URL")
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


function share(){
	var string = "http://www.facebook.com/sharer.php?u="+ encodeURIComponent(url)+",'Share','width=626,height=436,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,copyhistory=no,resizable=yes'" 
	console.log(string)
	window.open( fixedEncodeURIComponent (string))
}


function fixedEncodeURIComponent(str){
     return encodeURIComponent(str).replace(/[!'()]/g, escape).replace(/\*/g, "%2A");
}
/*CASO2*/
/*
$(document).ready(function(){
  $("#si1").click(function(){
	$("#paso2").hide();
	$("#paso3").css('display','block');
  });
});
*/