function showMenu() {
  document.getElementById('navbar').classList.remove("menu-hide");
  document.getElementById('navbar').classList.add("menu-show");
}

function hideMenu() {
  document.getElementById('navbar').classList.remove("menu-show");
  document.getElementById('navbar').classList.add("menu-hide");
}

$( ".hide-menu-icon" ).click(hideMenu);
$( ".show-menu-icon" ).click(showMenu);
