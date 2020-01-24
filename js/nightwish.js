$(document).ready(function () {
  var key = "AIzaSyBfjgig5CEoNxtb3JJVAvBCOO-6y1WR13s";
  var playlistId = "PL1Oe56aTHJgHpocUNiB7zNrFz7ZQr6EhP";
  var URL = "https://www.googleapis.com/youtube/v3/playlistItems";

  var options = {
    part: "snippet",
    key: key,
    maxResults: 20,
    playlistId: playlistId
  };
  load_NW_vids();

  function load_NW_vids() {
    $.getJSON(URL, options, function (data) {
      var id = data.items[0].snippet.resourceId.videoId;
      mainNWVid(id);
      results_NW_Loop(data);
    });
  } //end load_NW_vids

  function mainNWVid(id) {
    $(".video-nightwish").html(`
        <iframe class="embed-responsive-item"
         src="https://www.youtube.com/embed/${id}" width="200" height="315"
          frameborder="0"></iframe>`);
  } // end mainNWVid

  function results_NW_Loop(data) {
    $.each(data.items, function (i, item) {
      var NW_thumb = item.snippet.thumbnails.medium.url;
      var NW_Title = item.snippet.title;
      var NW_Vid = item.snippet.resourceId.videoId;

      $(".nightwish_vids").append(`
       
		    <div class="hovereffect" data-key="${NW_Vid}">
			    <img src="${NW_thumb}" alt="${NW_Title}">
									
				    <div class="overbottom">	
					  <h1>${NW_Title}</h1>
				    </div><!--End Overlay-->
		    </div><!--End hovereffect-->	
		`);
    }); //end $.each
  }

  console.log("la latura de la ventana es: "+$(window).height() + " y el ancho es: "+ $(window).width());
  console.log($("section#letras .nw_lyrics"));
  //Muestra las Canciones de los ALBUMES
  $("#letras .nw_lyrics").on("click", function MostrarCanciones(e) {
    
    $(this).next(".tracklist").slideToggle("slow");
 
  });

 //Abre y cierra Modal
  $(".tracklist ol>li").on("click",function (event) {
    
   
    $(this).next(".modal_NW").show();
    
    var canciones =$(event.target).next(".modal_NW").find(".modal-header");
    console.log(canciones);
    var cancion = $(this).get(0);
     cancion =cancion.innerHTML;
    console.log("titulo: "+ cancion);
    console.log(canciones.find("h2"));
  
    if(canciones.find("h2").length ==0) {
      canciones.append(`<h2>${cancion}</h2>`);
      console.log("verdadero");
    }else{
      console.log("falso");
    }

    
    $(".close_modal").click(function closeModal() {
      $(".modal_NW").hide();
    });
    
  });

      //smooth scroll
      $(".nav-link").each(function (i) { 
        console.log(i +":"+$(this).text());
        $(this).click(function(e){
          e.preventDefault(); //Preeviene el comportamiento original de la pagina
          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:"smooth",
            block:"start"

          });
         
        });
     });
 
     //Al hace scroll a la ventana
     $(window).scroll(function(e){
 
       const scroll = window.scrollY;
       const header = $("#NavPrin");  
 
       if(scroll  >300){
         console.log(scroll)
         header.addClass("bg-color");
       }else{
         header.removeClass("bg-color");
         
       }
 
     });
});