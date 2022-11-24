var menu = document.getElementById("btn_mobile");
var div_menu = document.getElementById("nav_mobile");

menu.addEventListener("click", activar_menu, false);
    
    function activar_menu()
    {   
      var activado = div_menu.style.display;
      if(activado == "block")
      {
        div_menu.style.display="none";
      }
      else
      {
        div_menu.style.display="block";
      }
      
    }
    
    function desactivar_menu()
    {  
      div_menu.style.display="none";
    }