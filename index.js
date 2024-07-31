var menu_click=document.getElementById("menu_click")
var sidenav=document.getElementById("sidenav")
var closeicon=document.getElementById("closeicon")
menu_click.addEventListener("click",function(){

    sidenav.style.right=0;
})  
menu_click.addEventListener("dblclick",function(){

    sidenav.style.display="none";
})