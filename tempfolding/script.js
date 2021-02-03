var oldPageX = 0,
    oldPageY = 0,
    flag = 0,
    theTip = $('#tip'),
theTiptwo = $('#tip2');
theTipthree = $('#tip3');
theTipfour = $('#tip4');

$(".view").mousemove(function(e){
  if(flag == 1) {
    var pageX = e.pageX,
      pageY = e.pageY,
      tipLeft = parseInt(theTip.css("left").substring(0, theTip.css("left").length - 2));
    console.log(tipLeft)
    if(pageX < oldPageX && pageY > oldPageY && (tipLeft > -570)) {      
      theTip.css( {
         width: "+=6",
         height: "+=6",
         bottom: "-=6",
         left: "-=6"
       }); 
    } else if(pageX > oldPageX && pageY < oldPageY && (tipLeft < -0.5)){
       theTip.css( {
         width: "-=6",
         height: "-=6",
         bottom: "+=6",
         left: "+=6"
       }); 
    }
    oldPageX = pageX;
    oldPageY = pageY;
}
});

$(".view").mousemove(function(e){
  if(flag == 2) {
    var pageX = e.pageX,
      pageY = e.pageY,
      tipRight = parseInt(theTiptwo.css("right").substring(0, theTiptwo.css("right").length-2 ));
    console.log(tipRight)
    if(pageX > oldPageX && pageY > oldPageY && (tipRight > 975)) {      
      theTiptwo.css( {
         width: "+=6",
         height: "+=6",
         bottom: "-=6",
         right: "-=6",

       }); 
    } else if(pageX < oldPageX && pageY < oldPageY && (tipRight < 1550)){
       theTiptwo.css( {
         width: "-=6",
         height: "-=6",
         bottom: "+=6",
         right: "+=6"
       }); 
    }
    oldPageX = pageX;
    oldPageY = pageY;
  }
});

$(".view").mousemove(function(e){
  if(flag == 3) {
    var pageX = e.pageX,
      pageY = e.pageY,
      tipRight = parseInt(theTipthree.css("right").substring(0, theTipthree.css("right").length-2 ));
    console.log(tipRight)
    if(pageX > oldPageX && pageY < oldPageY && (tipRight > 975)) {      
      theTipthree.css( {
         width: "+=6",
         height: "+=6",
         top: "-=6",
         right: "-=6"
       }); 
    } else if(pageX < oldPageX && pageY > oldPageY && (tipRight < 1550)){
       theTipthree.css( {
         width: "-=6",
         height: "-=6",
         top: "+=6",
         right: "+=6"
       }); 
    }
    oldPageX = pageX;
    oldPageY = pageY;
  }
});

$(".view").mousemove(function(e){
  if(flag == 4) {
    var pageX = e.pageX,
      pageY = e.pageY,
      tipLeft = parseInt(theTipfour.css("left").substring(0, theTipfour.css("left").length - 2));
    console.log(tipLeft)
    if(pageX < oldPageX && pageY < oldPageY && (tipLeft > -570)) {      
      theTipfour.css( {
         width: "+=6",
         height: "+=6",
         top: "-=6",
         left: "-=6"
       }); 
    } else if(pageX > oldPageX && pageY > oldPageY && (tipLeft < -0.5)){
       theTipfour.css( {
         width: "-=6",
         height: "-=6",
         top: "+=6",
         left: "+=6"
       }); 
    }
    oldPageX = pageX;
    oldPageY = pageY;
  }
});

 $('#tip').mousedown(function() {
  flag = 1;
 theTip.css('opacity', '0.9');
 theTiptwo.css('opacity', '0.9');
 theTipthree.css('opacity', '0.9');
 theTipfour.css('opacity', '0.9');
return 0;
});

 $('#tip2').mousedown(function() {
  flag = 2;
 theTip.css('opacity', '0.9');
 theTiptwo.css('opacity', '0.9');
 theTipthree.css('opacity', '0.9');
 theTipfour.css('opacity', '0.9');
return 0;
});

 $('#tip3').mousedown(function() {
  flag = 3;
 theTip.css('opacity', '0.9');
 theTiptwo.css('opacity', '0.9');
 theTipthree.css('opacity', '0.9');
 theTipfour.css('opacity', '0.9');
return 0;
});

 $('#tip4').mousedown(function() {
  flag = 4;
 theTip.css('opacity', '0.9');
 theTiptwo.css('opacity', '0.9');
 theTipthree.css('opacity', '0.9');
 theTipfour.css('opacity', '0.9');
return 0;
});

 $('#tip').mouseup(function() {
  flag = 0;
 theTip.css('opacity', '1');
 theTiptwo.css('opacity', '1');
 theTipthree.css('opacity', '1');
 theTipfour.css('opacity', '1');
return 0;
});

 $('#tip2').mouseup(function() {
  flag = 0;
 theTip.css('opacity', '1');
 theTiptwo.css('opacity', '1');
 theTipthree.css('opacity', '1');
 theTipfour.css('opacity', '1');
return 0;
});

 $('#tip3').mouseup(function() {
  flag = 0;
 theTip.css('opacity', '1');
 theTiptwo.css('opacity', '1');
 theTipthree.css('opacity', '1');
 theTipfour.css('opacity', '1');
return 0;
});

 $('#tip4').mouseup(function() {
  flag = 0;
 theTip.css('opacity', '1');
 theTiptwo.css('opacity', '1');
 theTipthree.css('opacity', '1');
 theTipfour.css('opacity', '1');
return 0;
});

 $('.view').mouseup(function() {
  flag = 0;
 theTip.css('opacity', '1');
 theTiptwo.css('opacity', '1');
 theTipthree.css('opacity', '1');
 theTipfour.css('opacity', '1');
return 0;
});
  $('body').mouseup(function() {
  flag = 0;
 theTip.css('opacity', '1');
 theTiptwo.css('opacity', '1');
 theTipthree.css('opacity', '1');
 theTipfour.css('opacity', '1');
return 0;
});

