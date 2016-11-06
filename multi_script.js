$(document).ready(function () {
    $(".random").each(function () {
        var randomtop = Math.floor(Math.random() * ($(window).height() - $(this).height()-400)),
            randomleft = Math.floor(Math.random() * ($(window).width() - $(this).width()-200));
        $(this).css({
            "top": randomtop,
            "left": randomleft,
        });
    });
});

$(function() {
  $( "#pic_module1, #pic_module2, #pic_module3, #pic_module4, #pic_module5, #pic_module6, #pic_module7, #pic_box" ).draggable();
});

$(function() {
  $("#list1, #list2").draggable();
});

$(document).ready(function () {
  $(".pics").click(function(){
      $('#pic_box, #list1, #list2, #x-pics').toggle();
  });
});
$(document).ready(function () {
  $("#x-pics").click(function(){
      $('#pic_box, #list1, #list2, #x-pics').toggle();
  });
});

$(document).ready(function () {
  $(".contact").click(function(){
      $('.contacts, #x-contact').toggle();
  });
});
$(document).ready(function () {
  $("#x-contact").click(function(){
      $('.contacts, #x-contact').toggle();
  });
});

$(document).ready(function () {
  $(".what").click(function(){
      $('.wat, #x-wat').toggle();
  });
});
$(document).ready(function () {
  $("#x-wat").click(function(){
      $('.wat, #x-wat').toggle();
  });
});

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 2000);
}

$(window).ready(function() {
    $('#loading').hide();
});

// $(".pics").click(function(){
//     $('#pic_box').hide();
// });
