$(function() {
  $(".selector-button").on("click",function() {
    // toggle underline
    $("span.filter-active").removeClass("filter-active");
    $(this).find("span").addClass("filter-active");

    if($(this).hasClass( "filter-all" )){
      $(".list-item").show();
    } else {
      $(".list-item").hide();
      $("."+$(this).attr('class').match(/filter\-.*/)[0]).show();
      console.log($(this).attr('class').match(/filter\-.*/)[0])
    }
  });
});
