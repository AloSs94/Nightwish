$(document).ready(function () {
 
//Videos Nightwish


console.log("enlace",$("#videos li a"));


 $("#videos li > a").find("img").each(function() {
  let nombre =$(this).data("nombre");
  $(this).after(`<div class="overbottom">
  <div class="name">${nombre}</div>
</div> `);

 });
 $("#videos li").each(function(e){
   $(this).on("click",function(e){
    e.preventDefault(); /*Previeene la función habitual
     del elemento, en este caso del enlace*/
    $("li").removeClass("actv");

    $(this).addClass("actv");
    let id= $(this).find("img").data("id");
    mainNWVid(id);
  $("html, body").animate({scrollTop:$("#NW_VidRep").offset().top},"slow");
   });
 });
 $("#videos li > a").on("click",function(a){
    
 });



function mainNWVid(id) { 
  $("#NW_VidRep").html(`
      <iframe class="embed-responsive-item"
       src="https://www.youtube.com/embed/${id}" width="200" height="315"
        frameborder="0"></iframe>`);

} //END NW_VidRep
//hover





});



  //Muestra las Canciones de los ALBUMES
  $("#letras .nw_lyrics").on("click", function MostrarCanciones(e) {
    
    $(this).next(".tracklist").slideToggle("slow");
 
  });

 //Abre y cierra Modal
  $(".tracklist ol>li").on("click",function (event) {
    
   
    $(this).next(".modal_NW").show();
    var canciones =$(event.target).next(".modal_NW").find(".modal-header");

    var cancion = $(this).get(0);
     cancion =cancion.innerHTML;
 

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
 
       let scroll = window.scrollY;
       const header = $("#NavPrin");  
 
       if(scroll  >300){
        
         header.addClass("bg-color");
         
       }else{
         header.removeClass("bg-color");
         
       }
 
     });
