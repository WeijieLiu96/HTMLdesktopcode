$().ready(function(){
	$.get("https://swapi.co/api/people/1/?format=json",
		function(data){
			$("#name").text(data.name);
			$("#eye").html(data.films[1]);

		},"json")
	.always(function(){
		alert($("name").text());
	})
	//alert($("#name").text());
});