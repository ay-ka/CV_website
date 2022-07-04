// jquery
$(document).ready(function(){
  // all jquery code here
  $(function drawSector() {
    var activeBorder = $("#activeBorder-l-1");
    var prec = activeBorder.children().children().text();
    if (prec > 100)
      prec = 100;
    var deg = prec * 3.6;
    if (deg <= 180) {
      activeBorder.css('background-image', 'linear-gradient(' + (90 + deg) + 'deg, transparent 50%, #c8a980 50%),linear-gradient(90deg, #c8a980 50%, transparent 50%)');
    } else {
      activeBorder.css('background-image', 'linear-gradient(' + (deg - 90) + 'deg, transparent 50%, #F88F01 50%),linear-gradient(90deg, #c8a980 50%, transparent 50%)');
    }

    var startDeg = $("#startDeg-1").attr("class");
    activeBorder.css('transform', 'rotate(' + startDeg + 'deg)');
  });


  $(function drawSector() {
    var activeBorder = $("#activeBorder-l-2");
    var prec = activeBorder.children().children().text();
    if (prec > 100)
      prec = 100;
    var deg = prec * 3.6;
    if (deg <= 180) {
      activeBorder.css('background-image', 'linear-gradient(' + (90 + deg) + 'deg, transparent 50%, #c8a980 50%),linear-gradient(90deg, #c8a980 50%, transparent 50%)');
    } else {
      activeBorder.css('background-image', 'linear-gradient(' + (deg - 90) + 'deg, transparent 50%, #F88F01 50%),linear-gradient(90deg, #c8a980 50%, transparent 50%)');
    }

    var startDeg = $("#startDeg-2").attr("class");
    activeBorder.css('transform', 'rotate(' + startDeg + 'deg)');
  });

  $(function drawSector() {
    var activeBorder = $("#activeBorder-l-3");
    var prec = activeBorder.children().children().text();
    if (prec > 100)
      prec = 100;
    var deg = prec * 3.6;
    if (deg <= 180) {
      activeBorder.css('background-image', 'linear-gradient(' + (90 + deg) + 'deg, transparent 50%, #c8a980 50%),linear-gradient(90deg, #c8a980 50%, transparent 50%)');
    } else {
      activeBorder.css('background-image', 'linear-gradient(' + (deg - 90) + 'deg, transparent 50%, #F88F01 50%),linear-gradient(90deg, #c8a980 50%, transparent 50%)');
    }

    var startDeg = $("#startDeg-3").attr("class");
    activeBorder.css('transform', 'rotate(' + startDeg + 'deg)');
  });

  $(".box-1").mouseenter(function(){
    $("#p-1").css("display", "grid");
    $("#p-1").mouseenter(function(){
        $("#p-1").css("display", "grid");
    });
    var on = 1;
  });

  $(".box-2").mouseenter(function(){
    $("#p-2").css("display", "grid");
    $("#p-2").mouseenter(function(){
        $("#p-2").css("display", "grid");
    });
    var on = 2;
  });

  $(".box-3").mouseenter(function(){
    $("#p-3").css("display", "grid");
    $("#p-3").mouseenter(function(){
        $("#p-3").css("display", "grid");
    });
    var on = 3;
  });

  $(".box-4").mouseenter(function(){
    $("#p-4").css("display", "grid");
    $("#p-4").mouseenter(function(){
        $("#p-4").css("display", "grid");
    });
    var on = 4;
  });

  $(".box-5").mouseenter(function(){
    $("#p-5").css("display", "grid");
    $("#p-5").mouseenter(function(){
        $("#p-5").css("display", "grid");
    });
    var on = 5;
  });

  $(".box-1").mouseleave(function(){
    $("#p-1").css("display", "none");
  });

  $(".box-2").mouseleave(function(){
    $("#p-2").css("display", "none");
  });

  $(".box-3").mouseleave(function(){
    $("#p-3").css("display", "none");
  });

  $(".box-4").mouseleave(function(){
    $("#p-4").css("display", "none");
  });

  $(".box-5").mouseleave(function(){
    $("#p-5").css("display", "none");
  });

  $("#p-1").mouseleave(function(){
    $("#p-1").css("display", "none");
  });

  $("#p-2").mouseleave(function(){
    $("#p-2").css("display", "none");
  });

  $("#p-3").mouseleave(function(){
    $("#p-3").css("display", "none");
  });

  $("#p-4").mouseleave(function(){
    $("#p-4").css("display", "none");
  });

  $("#p-5").mouseleave(function(){
    $("#p-5").css("display", "none");
  });




});
