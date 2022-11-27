
$(document).ready(function(){
  $("#link1").click(function(){
    $("#product-link").slideToggle("slow");
      $("#p-l-b").fadeToggle(700);
    });
    $('#close').click(function(){
      $("#product-link").slideUp("slow");
      $("#p-l-b").fadeOut(700);
    })
    $('#bod').click(function(){
      $("#product-link").slideUp("slow");
      $("#p-l-b").fadeOut(700);
    })
    
  });
    $('#menu').click(function(){
      $('#menu-nav').slideToggle("slow");
    })
    $('#lin1').click(function(){
      $('#menu-nav').slideUp("slow");
      $("#product-link").slideToggle("slow");
      $("#p-l-b").fadeToggle(700);
    })
  


