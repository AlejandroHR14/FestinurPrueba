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
		loading_text.style.paddingTop = '15px';
		word_animation.style.height = 'fit-content';
		word_animation.style.alignSelf = 'unset';
		div_img.style.paddingBottom = '35px';
	}else {
	}
};
mobile();