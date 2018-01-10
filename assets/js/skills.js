// setTimeout(function(){
//   $('.butt').each(function(){
//      $(this).css('transform','translate(-50%, -50%) rotateX(90deg)');
// }, 1000);
var button = $('.butt');
var sButton = $('.sBtn');
var i = 0;
button.on('mouseenter', function() {
	$(this).css('transform', 'translate(-50%, -50%) rotateX(90deg)');
	$(this).next().css('transform', 'translate(-50%, -100%) rotateX(0deg)');
	sButton.on('mouseleave', function() {
		$(this).css('transform', 'translate(-50%, -50%) rotateX(90deg)').removeAttr(
			'style');
		$(this).prev().css('transform', 'translate(-50%, -50%) rotateX(0deg)').removeAttr(
			'style');
	});
});
