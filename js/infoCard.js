document.getElementById("btn-info").addEventListener("click", info);
document.getElementById("btn-info2").addEventListener("click", info2);

window.addEventListener("resize", widthPage);

//Declarando variables
var container_informaciones = document.querySelector(".container-informaciones");
var div_info = document.querySelector(".div-info");
var div_info2 = document.querySelector(".div-info2");

var backbox_info = document.querySelector(".backbox-info");
var backbox_info2 = document.querySelector(".backbox-info2");


function widthPage(){
    if(window.innerWidth>820){
        backbox_info.style.display="block";
        backbox_info2.style.display="block";
    } else{
        backbox_info2.style.display="block";
        backbox_info2.style.opacity="1";
        backbox_info.style.display="none";
        div_info.style.display="block";
        div_info2.style.display="none";
        container_informaciones.style.left="0px";

    }
}
widthPage();







function info(){

    if(window.innerWidth>820){
        div_info2.style.display="none";
        container_informaciones.style.left="10px";
        div_info.style.display="block";
        backbox_info2.style.opacity= "1";
        backbox_info.style.opacity="0";
    }else{
        div_info2.style.display="none";
        container_informaciones.style.left="0px";
        div_info.style.display="block";
        backbox_info2.style.display= "block";
        backbox_info.style.display="none";
    }
    
}



function info2(){
    if(window.innerWidth>820){
        div_info2.style.display="block";
        container_informaciones.style.left="410px";
        div_info.style.display="none";
        backbox_info2.style.opacity= "0";
        backbox_info.style.opacity="1";
    } else{
        div_info2.style.display="block";
        container_informaciones.style.left="0px";
        div_info.style.display="none";
        backbox_info2.style.display= "none";
        backbox_info.style.display="block";
        backbox_info.style.opacity="1";
    }
    
}