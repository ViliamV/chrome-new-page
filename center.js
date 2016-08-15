$(document).ready(function(){
                           
 $(window).resize(function(){

  $('ul.icons li').css({
   //position:'absolute',
   //left: ($(window).width() 
   //  - $('ul.icons li').outerWidth())/2,
   //top: ($(window).height() 
   //  - $('ul.icons li').outerHeight())/2
   width: ($(window).width() / 5)*0.885,
   margin: ($(window).width() / 5)*0.05 
   //margin: 0  
  });
  
  $('ul.icons').css({ 
   top: ($(window).height() 
     - $('ul.icons').outerHeight())/2   
  });
        
 });
 
 // To initially run the function:
 $(window).resize();

});
