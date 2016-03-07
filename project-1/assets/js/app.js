
$(document).ready(function(){
    $(".r1img1x").click(function(){
        $(".r1img1xx").toggle(400);
    });
});

$(document).ready(function(){
    $(".r1img2x").click(function(){
        $(".r1img2xx").toggle(400);
    });
});

$(document).ready(function(){
    $(".r1img3x").click(function(){
        $(".r1img3xx").toggle(400);
    });
});

$(document).ready(function(){
    $(".r1img4x").click(function(){
        $(".r1img4xx").toggle(400);
    });
});

$(document).ready(function(){
    $(".r1img5x").click(function(){
        $(".r1img5xx").toggle(400);
    });
});


$(document).ready(function(){
    $(".r2img3x").click(function(){
        $(".r2img3xx").toggle(400);
    });
});

$(document).ready(function(){
    $(".r2img7x").click(function(){
        $(".r2img7xx").toggle(400);
    });
});

$(document).ready(function(){
    $(".r2img8x").click(function(){
        $(".r2img8xx").toggle(400);
    });
});

$(document).ready(function(){
    $(".r2img4x").click(function(){
        $(".r2img4xx").toggle(400);
    });
});

$(document).ready(function(){
    $(".r3img1x").click(function(){
        $(".r3img1xx").toggle(400);
    });
});

$(document).ready(function(){
    $(".r3img2x").click(function(){
        $(".r3img2xx").toggle(400);
    });
});

$(document).ready(function(){
    $(".r3img3x").click(function(){
        $(".r3img3xx").toggle(400);
    });
});


$(".overlay").click(function(){
    $(".overlay, .r1img1xx, .r1img2xx, .r1img3xx, .r1img4xx, .r1img5xx, r2img3xx, .r2img4xx, .r2img7xx, .r2img8xx, .r3img1xx, .r3img2xx, .r3img3xx").hide(400);
});

$(".r1img1x, .r1img2x, .r1img3x, .r1img4x, .r1img5x, r2img3x, .r2img4x, .r2img7x, .r2img8x, .r3img1x, .r3img2x, .r3img3x").click(function(){
    $(".overlay").show(400);
});
