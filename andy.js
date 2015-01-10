$(document).ready(function() {
    $("#top-nav").hide(); });
    
$(function(){
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    var winHeight = $(window).height(); 
    var tenPercent = winHeight / 10; 
    if(winTop >= tenPercent){ //30 
      $("#bottom-nav").hide("slow");
      $("#top-nav").show("slow");
      $("#top-nav").addClass("sticky-header"); 
    }else{
      $("#top-nav").removeClass("sticky-header");
      $("#bottom-nav").show("slow");
      $("#top-nav").hide("slow"); 
    }//if-else
  });//win func.
});//ready func.