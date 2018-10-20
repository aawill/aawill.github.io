$(document).ready(function() {
  let windowHeight = $(window).height();
  let navHeight = $('#mainNav').outerHeight(true);
  let topHeight = $('#topRow').outerHeight(true);
  let bottomHeight = $('#footRow').outerHeight(true);
  
  $('#mainContent').outerHeight(windowHeight - navHeight - 
                                      topHeight - bottomHeight);
  
  $(window).resize(function() {
    windowHeight = $(window).height();
    navHeight = $('#mainNav').outerHeight(true);
    topHeight = $('#topRow').outerHeight(true);
    bottomHeight = $('#footRow').outerHeight(true);

    $('#mainContent').outerHeight(windowHeight - navHeight - topHeight - bottomHeight);
  });
});

