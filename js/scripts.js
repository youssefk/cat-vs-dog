$(document).ready(function(){
  $("button#meow").click(function(){
    $("ul#cat").prepend("<li>Meow</li>");
    $("ul#dog").prepend("<li>Bark</li>");
  });

  $("button#bark").click(function(){
    $("ul#cat").prepend("<li>Hiss...</li>");
    $("ul#dog").prepend("<li>Whimper</li>");
  });

});
