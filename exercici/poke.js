var i_id = 1;
$().ready(function(){
	$.get("40.118.8.76/pokemons",
		function(data){
			$("#code").text(data[1].num);
			/*$("#normal").img(data[i_id].images.front);
			$("#shiny").img(data[i_id].images.front_shiny);
			$("#name").text(data[i_id].name);
			$("#type").text(data[i_id].types[0]);
			$("#hm").text(data[i_id].moves.HM;*/

		},"json")
	/*.always(function(){
		alert($("name").text());
	})
	//alert($("#name").text());*/
});
$("#btn").prop("disabled",true);