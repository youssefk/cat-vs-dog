$(document).ready(function(){
  $("button#meow").click(function(){
    $("ul#cat").prepend("<img src='img/cat.jpg' class='profile'>");
    $("ul#cat").prepend("<li>Meow</li>");
    $("ul#dog").prepend("<img src='img/dog.jpg' class='profile'>");
    $("ul#dog").prepend("<li>Bark</li>");
  });

  $("button#bark").click(function(){
    $("ul#cat").prepend("<img src='img/cat-hiss.jpg' class='profile'>");
    $("ul#cat").prepend("<li>Hiss...</li>");
    $("ul#dog").prepend("<img src='img/dog-sad.jpg' class='profile'>");
    $("ul#dog").prepend("<li>Whimper</li>");
  });

});
