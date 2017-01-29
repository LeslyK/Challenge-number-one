$(document).ready(function(){

	$.ajax({
		type: "GET",
		url: "client.xml",
		dataType: "xml",

		success: start,
	});

	function start(xml){
		var nom;
		$(xml).find('client').each(function(){
					//var x = $(this).find();
					//console.log('client');
					//console.log($(this).attr("id"));
					var nom = $(this).find('nom').text();
					var prenom = $(this).find('prenom').text();
					var old = $(this).find('old').text();
					var profession = $(this).find('profession').text();
					var mail = $(this).find('mail').text();
					var adresse = $(this).find('adresse').text();
					$('#select').append("<option class='client'>"+nom);			

		})
				
				$('#select').click(function(){
					var client = ($(this).val());
					var prenom = ($(xml).find('#' + client).find('prenom').text())
					var nom = ($(xml).find('#' + client).find('nom').text())
					var age = ($(xml).find('#' + client).find('old').text())
					var profession = ($(xml).find('#' + client).find('profession').text())
					var mail = ($(xml).find('#' + client).find('mail').text())
					var adresse = ($(xml).find('#' + client).find('adresse').text())
					$('#fileContent').html(nom+" "+prenom+" "+age+" "+profession+" "+mail+" "+adresse)
				});
	}
});





/*(function()
{
	xhr = new XMLHttpRequest();
	
	xhr.open('GET',client.xml, true);
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.statut === 200) { 
			document.getElementById("fileContent").innerHTML = "<span>" + xhr.responseText + "</span>";
		}
		else if(xhr.readyState === 4 && xhr.statut !== 200) 
		{
			alert("Une erreur est survenue");
		}
	};
	xhr.send();




	(function() { 

        var inputs = document.getElementsByTagName('input');
        inputsLen = inputs.length;

        for (var i = 0; i < inputsLen; i++) {

            inputs[i].addEventListener('click', function() {
                loadFile(this.value); 
            });

        }

    })();
})*/