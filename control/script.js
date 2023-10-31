// page 1 functions

$("#answerNo").hover(function(){
    $("#answerNo").toggleClass("nah2");
});

$(".answer").click(function(){
    window.location.href="keyGrab.html";
});

// page 2 function

$(function() {
  $('#keyImg').draggable();
  $('.pocket').droppable({
    classes: {
      "ui-droppable-hover": "ui-state-hover"
    },
    drop: function( event, ui ) {
      $('.title').html('you go! go to that 2005 Ford Taurus!');
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
      $(this).html("silly goose! it's a 2005 Ford Taurus, of course it doesn't start!");
      document.getElementById('wompAudio').play();
    }
  });
  var playing = false;
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
  $('.doorHandle').click(function(){
    $(this).html('shit, the door handle broke...');
    document.getElementById('wompAudio').play();
    $('.otherDoorHandle').addClass('doorHandleShow');
  })
  $('.otherDoorHandle').click(function(){
    $(this).html('this door handle broke too, stupid dumb car.');
    document.getElementById('wompAudio').play();
    $('.sadness').addClass('sadnessShow');
  }) 
});


