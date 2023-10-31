// page 1 functions

$("#answerNo").hover(function(){
    $("#answerNo").toggleClass("nah2");
});

$(".answer").click(function(){
    window.location.href="/control/keyGrab.html";
});

// page 2 function

$(function() {
  $('#keyImg').draggable();
  $('.pocket').droppable({
    classes: {
      "ui-droppable-hover": "ui-state-hover"
    },
    drop: function( event, ui ) {
      $('.title').html('you go! go unlock that door!');
      $('.taurusExt').addClass('taurusShow');
    },
    out: function(event, ui) {
      $(this).removeClass('pocketHighlighted');
    },
    over: function(event, ui) {
      $(this).addClass('pocketHighlighted');
    }
  });
  $('.taurusExt').droppable({
    drop: function(event, ui) {
      $(this).css('display', 'none');
      $('.title').css('display', 'none');
      $('.interiorCenterer').css('display', 'flex');
      console.log('dropped it in ~ere')
    }
  });
});

// interior function

$(function() {
  $('#keyImg').draggable();
  $('.ignition').droppable({
    drop: function(event, ui) {
      $('#keyImg').css('display', 'none');
      $(this).html("silly goose! it's a 2005 Ford Tarus, of course it doesn't work!");
    }
  });
  var playing = false
  $('.radio').click(function() {
    if (playing == false) {
      delilahAudio.play();
      playing = true;
      console.log('its playing');
      console.log('playing is ' + playing);
      // $('.radio').html('radio (click again to pause)');
    } else {
      delilahAudio.pause();
      playing = false
      console.log('its not playing');
      // $('.radio').html('radio');
    }
  }); 
});


