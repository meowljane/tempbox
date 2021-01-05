$('#content')
  .on("dragover", dragOver)
  .on("dragleave", dragOver)
  .on("drop", uploadFiles);

function dragOver(e){
	e.stopPropagation();
	e.preventDefault();
	if (e.type == "dragover") {
		$(e.target).css({
			"background-color": "black",
			"outline-offset": "-20px"
		});
	} else {
    	$(e.target).css({
			"background-color": "black",
			"outline-offset": "-10px"
		});
    }
}

function uploadFiles(e) {
    e.stopPropagation();
    e.preventDefault();
    dragOver(e);
  
    e.dataTransfer = e.originalEvent.dataTransfer;
    var files = e.target.files || e.dataTransfer.files;
    if (files.length > 1) {
        alert('하나만 올려주세요.');
        return;
    }

if (files[0].name.match(/tutorialkey.png/)){
$('body').css({"background-color": "white" }).animate({'duration': 2500, 'queue': false});
$('#튜토5').animate({'opacity': 1}, {'duration': 2500, 'queue': false})
.css({"display":"block"});
$('#튜토4,#content').css({"display":"none"});
var audio = $("#tutorial")[0];audio.pause();
var audio = $("#clear")[0]; audio.play();
}

else{
      alert('올바른 아이템을 올려주세요.');
      return;
    }
}