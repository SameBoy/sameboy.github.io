slide = Math.floor(Math.random() * 9)

document.body.onload = function () {
    $(".gallery-item").css('left', 460);
    $(".gallery-item").css("position", "absolute");
    $($(".gallery-item")[slide]).css('left', 40);
}
function flip(element)
{
    $($(".gallery-item")[slide]).css("z-index", "0");
    $($(".gallery-item")[slide]).addClass("zoom-out");
    slide++;
    slide %= 9;
    $($(".gallery-item")[slide]).removeClass("zoom-out");
    $($(".gallery-item")[slide]).css("z-index", "1");
    $($(".gallery-item")[slide]).css("left", 460);
    $($(".gallery-item")[slide]).animate({
        "left": 40
    }, 800);
    
    setTimeout(flip, 5000);
}
setTimeout(flip, 5000);