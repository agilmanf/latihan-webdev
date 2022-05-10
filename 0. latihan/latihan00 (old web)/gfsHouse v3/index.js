$("#hamburgermenu").click(function MenuToggle(){});

var menu = $("#menu");
var mainMenu = $(".mainmenu");

function MenuToggle(){
  if(menu.css("display") == "none"){
    mainMenu.css("display", "none");
    menu.css("display", "block");
  }
  else {
    mainMenu.css("display", "inline");
    menu.css("display", "none");
  }
}
