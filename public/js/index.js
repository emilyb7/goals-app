function showhide(showpage, hidepage){
  console.log("show:",showpage);
  $("."+hidepage).fadeOut(300, function(){
    $("."+showpage).show().attr('style','display:flex');
  });
}

function selectNewIcon (elem) {
  var selectedIcon = $('#' + elem);
  $('.goal-icon-container').removeClass('selected');
  selectedIcon.addClass('selected');
}
