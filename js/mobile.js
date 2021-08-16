var div_loading = document.querySelector(".div--loading");
var loading_text = document.querySelector(".loading-text");
var word_animation = document.querySelector(".word--animation");
var div_img = document.querySelector(".div-img");



 function detectMob() {
   const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
   return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
   });
}



function mobile() {
	if (detectMob() == true) {
          div_loading.style.alignItems = 'center';
		loading_text.style.paddingTop = '0';
		word_animation.style.alignSelf = 'unset';
		div_img.style.alignSelf = 'unset'
	}else {
          loading_text.style.paddingTop = '25px';
          word_animation.style.alignSelf = 'center';
          div_img.style.alignSelf = 'end'
	}
};
mobile();