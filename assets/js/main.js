$(function(){


    $("#home").on( 'click', function(){
        $("#container").load("pages/home.html");
        
    });
   
     $("#about").on( 'click', function(){
        $("#container").load("pages/about.html");
        
    });

     $("#skills").on( 'click', function(){
        $("#container").load("pages/skills.html");
        
    });

       $("#works").on( 'click', function(){
        $("#container").load("pages/work.html");
        
    });

         $("#contact").on( 'click', function(){
        $("#container").load("pages/contact.html");
        
    });

        $("#contact-button").on( 'click', function(){
        $("#container").load("pages/contact.html");
        
    });

    

 //    $("#about").on( 'click', function(){
 //    $.ajax({url: "pages/about.html", dataType: 'html', success: 
 //    	function(result){
 //        $("#container").html(result);
 //    	}});
	// });
	
 
});






