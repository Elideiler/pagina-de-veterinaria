// Menu del responsive 


var menuboton =   document.getElementById("btnMenuOpen"),

    menuresponsive = document.getElementById("menu-bar");

    menuboton.addEventListener("click", function(){

        if(menuresponsive.className=="menu-bar"){

            menuresponsive.classList.add("active");
        }else{

            menuresponsive.classList.remove("active")

        }



    })