var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;

	this.document.querySelector("#play").addEventListener("click", function () {
		console.log("Play Video");
		//document.querryselector (InnerHTML)
		video.play();
		document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
		//implement the pause button
		document.querySelector("#pause").addEventListener("click", function () {
			console.log("Pause Video");
			video.pause();
		}
		);

		document.querySelector("#slower").addEventListener("click", function () {
			video.playbackRate *= 0.9;
			//console log, log new speed in %
			console.log(video.playbackRate * 100 + "%");
		});

		document.querySelector("#faster").addEventListener("click", function () {
			//console log
			video.playbackRate /= 0.9;
			//console log
			console.log(video.playbackRate * 100 + "%");
		});
		//Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.
		document.querySelector("#skip").addEventListener("click", function () {
			if (video.currentTime < video.duration - 10) {
				video.currentTime += 10;
			} else {
				video.currentTime = 0;
			}
			console.log(video.currentTime);
		});
		//Mute/unmute the video and update the text in the button.
		document.querySelector("#mute").addEventListener("click", function () {
			if (video.muted) {
				video.muted = false;
				document.querySelector("#mute").innerHTML = "Mute";
			} else {
				video.muted = true;
				document.querySelector("#mute").innerHTML = "Unmute";
			}
		});
		//Volume Slider. Change the volume based on the slider and update the volume information next to it.
		document.querySelector("#slider").addEventListener("change", function () {
			video.volume = this.value / 100;
			document.querySelector("#volume").innerHTML = this.value + "%";
		});
		//Styled Utilize the existing oldSchool class on the video element
		document.querySelector("#vintage").addEventListener("click", function () {
			video.classList.add("oldSchool");
		});
		//Original Remove the oldSchool class from the video.
		document.querySelector("#orig").addEventListener("click", function () {
			video.classList.remove("oldSchool");
		});
	});
});




// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

