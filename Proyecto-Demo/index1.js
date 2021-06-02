

//hamburger Function
$( document ).ready(function() {
  /* Open Panel */
  $( ".hamburger" ).on('click', function() {
    $(".menu").toggleClass("open--menu");

  });
});



$( document ).ready(function() {
  $( ".search-b" ).on('click', function() {
    $(".search-box").toggleClass("search-boxuno");
  });
});

//remove <Text>
function myCancel() {
  document.getElementById('search-text').value = "";
}



//erase text form
function myEraseu() {
  document.getElementById('c1').value = "";
}
function myErased() {
  document.getElementById('c2').value = "";
}
function myEraset() {
  document.getElementById('c3').value = "";
}
function myErasec() {
  document.getElementById('c4').value = "";
}







$(function(){

  $('.search-b').click(function(){

    if( $('.search-boxuno').css('top') == '-9999px' )

       $('.search-boxuno').animate({top:'75px',right:'30px'});

    else

       $('.search-boxuno').css('top','-9999px');


    return false;

  });

});
