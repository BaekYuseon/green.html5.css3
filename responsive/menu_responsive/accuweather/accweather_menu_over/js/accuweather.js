$(function(){
    $(".radar").on("mouseover", function(){
        $(".menu1").css({"display":"block"});
    });

    $(".menu1").on("mouseout", function(){
        $(".menu1").css({"display":"none"});
    });
});