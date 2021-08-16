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



window.onload = function(){
	$(".div--loading").fadeOut();
	$(".loading").removeClass('loading');
}


/*function loading() {
 
	$(".div--loading").fadeOut();
	$(".loading").removeClass('loading');
 
}setTimeout(loading,7000);*/