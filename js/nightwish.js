$(document).ready(function () {
    var key = 'AIzaSyBfjgig5CEoNxtb3JJVAvBCOO-6y1WR13s';
    var playlistId='PL1Oe56aTHJgHpocUNiB7zNrFz7ZQr6EhP';
    var URL='https://www.googleapis.com/youtube/v3/playlistItems';

    var options={
        part:'snippet',
        key:key,
        maxResults:20,
        playlistId: playlistId
    }
    load_NW_vids();

    function load_NW_vids(){
        $.getJSON(URL,options, function (data) {

                var id=data.items[0].snippet.resourceId.videoId;
                mainNWVid(id);
                results_NW_Loop(data);
            }
        );


    }//end load_NW_vids

    function mainNWVid(id){
        $('.video-nightwish').html(`
        <iframe class="embed-responsive-item"
         src="https://www.youtube.com/embed/${id}" width="200" height="315"
          frameborder="0"></iframe>`);
        
        
    }// end mainNWVid
        
    function results_NW_Loop(data){
        $.each(data.items, function (i,item) {

        var NW_thumb=item.snippet.thumbnails.medium.url;
        var NW_Title=item.snippet.title;
        var NW_Vid=item.snippet.resourceId.videoId;

       $(".nightwish_vids").append(`
       
		    <div class="hovereffect" data-key="${NW_Vid}">
			    <img src="${NW_thumb}" alt="${NW_Title}">
									
				    <div class="overbottom">	
					  <h1>${NW_Title}</h1>
				    </div><!--End Overlay-->
		    </div><!--End hovereffect-->	
		`); 
 

        });//end $.each
    }//end results_NW_Loop

    $('.nightwish_vids').on('click','.hovereffect',function(){
        var id=$(this).attr('data-key');
        mainNWVid(id);
    });
});


			