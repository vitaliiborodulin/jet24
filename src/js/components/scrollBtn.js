var arrowUpBtn = $('#scroll-button');

function scrollBtn() {
	var top = $(this).scrollTop();

	if (top > 300) {
		arrowUpBtn.fadeIn(500);
	} else {
		arrowUpBtn.fadeOut(500);
	}
}

scrollBtn();

$(window).on('scroll', scrollBtn);

arrowUpBtn.click(function(e) {
    e.preventDefault();

    $('body, html').animate({
        scrollTop: 0
    }, 300)
});