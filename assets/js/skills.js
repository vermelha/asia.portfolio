$(document).ready(function(){

var button = $('.butt');
var sButton = $('.sBtn');


button.mouseenter (function() {
	$(this).css('transform', 'translate(-50%, -50%) rotateX(90deg)');
	$(this).next().css('transform', 'translate(-50%, -100%) rotateX(0deg)');
})

    window.setInterval(function() {
       button.removeAttr('style');
        sButton.removeAttr('style');
    },1500);


$('.parallelogram').each(function setAnim(){
    $('#p1, #p8').
            animate({left: '70%'},500).
            animate({ left: '5%',},500,setAnim);
    $('#p2, #p7').
            animate({left: '60%'},500).
            animate({ left: '5%',},500,setAnim);
     $('#p3, #p6').
            animate({left: '40%'},500).
            animate({ left: '5%',},500,setAnim);
     $('#p4').
            animate({left: '80%'},500).
            animate({ left: '5%',},500,setAnim);
     $('#p5').
            animate({left: '30%'},500).
            animate({ left: '5%',},500,setAnim);         
});


});
