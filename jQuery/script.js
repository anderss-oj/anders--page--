// import {$} from jquery 

$(".darkBtn").click(function(){
    $(".box").toggleClass("dark");
    $("body").toggleClass("dark");
});

$(".glowBtn").click(function(){
    $(".box").toggleClass('glow');
});

$(".spinBtn").click(function(){
    $('.box').toggleClass('spin');
});

$(function(){
    $( ".draggable" ).draggable({snap: true});
    
    // adds an inline style that updates the position 
});

$('.revealBtn').click(function(){
    $('.people').addClass('reveal');
    $('.people').addClass('draggable');
    
    // ^^ this adds, not toggles, css class

    // $('.people').css("opacity", "1");

    // ^^ this is like accessing the '.style' property in JS. this accesses and adds using '.css()' method

    $('.revealBtn').addClass('none');

    // again, ^^ this adds class

    // $('.revealBtn').hide();

    // ^^ this method adds 'display: none' to the targeted property

    $(function(){
        $( ".draggable" ).draggable({snap: true});
    }); // reading this property again, bc otherwise it's only read once through

});