$(document).ready(function(){
  $("button#meow").click(function(){
    $("ul#cat").prepend("<li>Meow</li>");
    $("ul#dog").prepend("<li>Bark</li>");

    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });

    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });

  });

  $("button#bark").click(function(){
    $("ul#dog").prepend("<li>Whimper</li>");
    $("ul#cat").prepend("<li>Hiss...</li>");

    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });

    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });

  });

});
