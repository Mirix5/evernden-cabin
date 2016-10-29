$(function() {
	var video = $('video')[0];
	video.addEventListener('loadeddata', function() {
   		this.volume = 0.15;
   		scaleVideo();
	}, false);
});

$(window).resize(function() {
	//scaleVideo();
	console.log('window:');
	console.log($(window).height());
	console.log($(window).width());
});

function scaleVideo() {
	var video = $('video')[0];
	height = $(window).height();
	width = $(window).width();
	console.log($(window).height());
	console.log($(window).width());
	scaleFactor =  width/height;
	if(scaleFactor > 1920/1080) {
		video.width = width;
	} else {
		video.height = height;
	}
}

function volume() {
	var video = $('video')[0];
	if(video.volume > 0){
		video.volume = 0;
	} else {
		video.volume = 0.15;
	}

	$("#ban").toggleClass('fa-ban');
	$("#speaker").toggleClass('fa-volume-up');
	$("#speaker").toggleClass('fa-volume-off');
}