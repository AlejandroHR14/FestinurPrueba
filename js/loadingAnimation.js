const spans = document.querySelectorAll('.word--animation span');

spans.forEach((span, idx) => {
	span.addEventListener('click', (e) => {
		e.target.classList.add('active');
	});
	span.addEventListener('animationend', (e) => {
		e.target.classList.remove('active');
	});
	
	// Initial animation
	setTimeout(() => {
		span.classList.add('active');
	}, 750 * (idx+1))
});


window.onload = () => {
	$(".div--loading").fadeOut();
	$(".loading").removeClass('loading');
};


/*document.querySelector(".scrollDown").style.display = 'block';*/




/*function loading() {
 
	$(".div__preload").fadeOut();
	$(".preload").removeClass('preload');
 
}setTimeout(loading,7000);*/