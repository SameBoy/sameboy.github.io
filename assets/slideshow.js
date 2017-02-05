
$(".slideshow > figure").css("display", "none");
$(".slideshow > figure:first-child").css("display", "block");
$(".slideshow").css("position","relative");
var next_prototype = $("<div></div>");
next_prototype.css("position", "absolute");
next_prototype.css("left", "55%");
next_prototype.css("right", "0");
next_prototype.css("top", "0");
next_prototype.css("bottom", "0");
next_prototype.css("cursor", "e-resize");
next_prototype.css("z-index", "100");
next_prototype.click(function() {
    var slideshow = $(this).parent();
    var previous = slideshow.find("> figure").first();
    previous.css("display", "none");
    previous.detach();
    slideshow.find("> figure").first().css("display", "block");
    slideshow.append(previous);
});

var previous_prototype = $("<div></div>");
previous_prototype.css("position", "absolute");
previous_prototype.css("right", "55%");
previous_prototype.css("left", "0");
previous_prototype.css("top", "0");
previous_prototype.css("bottom", "0");
previous_prototype.css("cursor", "w-resize");
previous_prototype.css("z-index", "100");
previous_prototype.click(function() {
    var slideshow = $(this).parent();
    slideshow.find("> figure").first().css("display", "none");
    var next = slideshow.find("> figure").last();
    next.css("display", "block");
    next.detach();
    slideshow.prepend(next);
});

$(".slideshow").each(function() {
    $(this).append(next_prototype.clone(true))
    $(this).append(previous_prototype.clone(true))
});