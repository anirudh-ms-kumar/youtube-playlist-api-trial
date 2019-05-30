$(document).ready(function(){

	const key = 'AIzaSyCEIqayKiT0l05ANrKpRMr2MIIp31Mtd3U';
	var playlistID = 'RDT-g39o0rDos'
	var URL = "https://www.googleapis.com/youtube/v3/playlistItems"
	var options = {
		part : 'snippet',
		playlistId   : playlistID,
		maxResults : 10,
		key  : key,		
	};
	loadVid();
	
	
	function loadVid()
	{
		$.getJSON(URL,options,function(data){
			console.log(data);
			var id,i,thumb;
			id = data.items[0].snippet.resourceId.videoId;
			mainVid(id);			  
			up_next(data);			
		});	
	}
	
	function mainVid(id){
		$('.player').html(`<iframe src="https://www.youtube.com/embed/${id}" frameborder="0"  allow="autoplay; encrypted-media" allowfullscreen></iframe>`)		
	}
	
	
	
	function up_next(data)
	{
		var thumb;
		$.each(data.items,function(i,item){
			thumb = item.snippet.thumbnails.medium.url;
			$('.suggestions').append(`<div class="up_next" height="10%">
				<img src="${thumb}" class="thumb">
				<div class="desc">
					<h4>Title</h4>
					<p>might casue cause a scro;; scrollbae scrollbr scrollva scrollbar to appeab apper appear</p>
				</div>`);
				console.log(thumb);
		});
	}
		

});
