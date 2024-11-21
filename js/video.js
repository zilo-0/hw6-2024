var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector(".video");
	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		video.play();
	});
	this.document.querySelector("#pause").addEventListener("click", function() {
		console.log("Pause Video");
		video.pause();
	});
});


// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

