var loading_text = document.querySelector(".loading-text");
var word_animation = document.querySelector(".word--animation");
var div_img = document.querySelector(".div-img");


function safari() {
	if (navigator.userAgent.indexOf() != -1) {
		loading_text.style.paddingTop = '15px';
		word_animation.style.height = 'fit-content';
		word_animation.style.alignSelf = 'unset';
		div_img.style.paddingBottom = '35px';
	}
};
safari();