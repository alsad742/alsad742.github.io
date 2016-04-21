


$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
        } 
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 2000);
        return false;
    });

});



$(window).scroll(function() {
    console.log($(window).scrollTop());
    if ($(window).scrollTop() > 2000) {
        $(".text2").fadeIn(8000);
    }
});

$('.text1').hide().fadeIn(1000);




$(function() {
    $(window).scroll( function(){
    
       
        $('.scroll-fade-in').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            bottom_of_window = bottom_of_window + 300;  
          
            if( bottom_of_window > bottom_of_object ){ 
                $(this).animate({'opacity':'1'},600)           
            }
        }); 
    
    });
});



 $(window).keypress(function(event) {
    if(event.which == 97 || event.which == 65) {
        var newLetter = $(".a.letter:last").clone();
        $(".stage").append(newLetter);
    }
    if(event.which == 98 || event.which == 66) {
        var newLetter = $(".b.letter:last").clone();
        $(".stage").append(newLetter);
    }
    if(event.which == 99 || event.which == 67) {
        var newLetter = $(".c.letter:last").clone();
        $(".stage").append(newLetter);
    }
    if(event.which == 100 || event.which == 68) {
        var newLetter = $(".d.letter:last").clone();
        $(".stage").append(newLetter);
    }
    if(event.which ==101 || event.which == 69) {
        var newLetter = $(".e.letter:last").clone();
        $(".stage").append(newLetter);
    }
    if(event.which == 102 || event.which == 70) {
        var newLetter = $(".f.letter:last").clone();
        $(".stage").append(newLetter);
    }
    if(event.which == 103 || event.which == 71) {
        var newLetter = $(".g.letter:last").clone();
        $(".stage").append(newLetter);
    }
    if(event.which == 104 || event.which == 72) {
        var newLetter = $(".h.letter:last").clone();
        $(".stage").append(newLetter);
    }
    if(event.which == 105 || event.which == 73) {
        var newLetter = $(".i.letter:last").clone();
        $(".stage").append(newLetter);
    }
    if(event.which == 106 || event.which == 74) {
        var newLetter = $(".j.letter:last").clone();
        $(".stage").append(newLetter);
    }
    if(event.which == 107 || event.which == 75) {
        var newLetter = $(".k.letter:last").clone();
        $(".stage").append(newLetter);
    }
    if(event.which == 108 || event.which == 76) {
        var newLetter = $(".l.letter:last").clone();
        $(".stage").append(newLetter);
    }
    if(event.which == 109 || event.which == 77) {
        var newLetter = $(".m.letter:last").clone();
        $(".stage").append(newLetter);
    }
    if(event.which == 110 || event.which == 78) {
        var newLetter = $(".n.letter:last").clone();
        $(".stage").append(newLetter);
    }
    if(event.which == 111 || event.which == 79) {
        var newLetter = $(".o.letter:last").clone();
        $(".stage").append(newLetter);
    }
    if(event.which == 112 || event.which == 80) {
        var newLetter = $(".p.letter:last").clone();
        $(".stage").append(newLetter);
    }
    if(event.which == 113 || event.which == 81) {
        var newLetter = $(".q.letter:last").clone();
        $(".stage").append(newLetter);
    }
    if(event.which == 114 || event.which == 82) {
        var newLetter = $(".r.letter:last").clone();
        $(".stage").append(newLetter);
    }
    if(event.which == 115 || event.which == 83) {
        var newLetter = $(".s.letter:last").clone();
        $(".stage").append(newLetter);
    }
    if(event.which == 116 || event.which == 84) {
        var newLetter = $(".t.letter:last").clone();
        $(".stage").append(newLetter);
    }
    if(event.which == 117 || event.which == 85) {
        var newLetter = $(".u.letter:last").clone();
        $(".stage").append(newLetter);
    }
    if(event.which == 118 || event.which == 86) {
        var newLetter = $(".v.letter:last").clone();
        $(".stage").append(newLetter);
    }
    if(event.which == 119 || event.which == 87) {
        var newLetter = $(".w.letter:last").clone();
        $(".stage").append(newLetter);
    }
    if(event.which == 120 || event.which == 88) {
        var newLetter = $(".x.letter:last").clone();
        $(".stage").append(newLetter);
    }
    if(event.which == 121 || event.which == 89) {
        var newLetter = $(".y.letter:last").clone();
        $(".stage").append(newLetter);
    }
    if(event.which == 122 || event.which == 90) {
        var newLetter = $(".z.letter:last").clone();
        $(".stage").append(newLetter);
    }
    if (event.which == 32) {
   newLetter = $(".space");     
   $(".stage").append(newLetter);
}

});














        // $(document).ready(function() {
        //     myAnimate();
        // });

        // function myAnimate() {
        //     $(".animateme").each(function() {
        //         var newTop = Math.floor(Math.random() * 200) - 100;
        //         var newLeft = Math.floor(Math.random() * 200) - 100;
        //         $(this).animate({
        //             top: newTop,
        //             left: newLeft
        //         }, 500, function() {
        //             myAnimate();
        //         });
        //     });
        // }
