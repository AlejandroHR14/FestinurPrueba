window.onscroll = () => {
  let scroll = document.documentElement.scrollTop;
  if (scroll > 200) {
    document.getElementById("show-nav").style.transform = "scale(1)";
  } else {
  	
  	document.getElementById("show-nav").style.display = "block";
    document.getElementById("show-nav").style.transform = "scale(0)";
    document.getElementById("span").classList.remove("menu-visible");
    document.querySelector(".menu-icon").classList.remove("spin-menu");
  }
};