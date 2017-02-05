$( ".zoom" ).click(function() {
    var image = $(this).children().first();
    
    var greyout = $('<div>');
    greyout.css("position", "fixed")
    greyout.css("top", 0);
    greyout.css("left", 0);
    greyout.css("bottom", 0);
    greyout.css("right", 0);
    greyout.css("background-color", "rgba(0,0,0,0.125)");
    greyout.css("opacity", 0);
    greyout.css("cursor", "zoom-out");
    $("body").append(greyout);
    
    $("body").css("overflow", "hidden")
    
    var container = $('<div>');
    container.css("position", "fixed")
    offset = image[0].getBoundingClientRect();
    container.css("top", offset.top);
    container.css("left", offset.left);
    container.css("width", image.width());
    container.css("height", image.height());
    container.css("pointer-events", "none");
    container.css("margin", "0");
    container.css("max-width", "100%");
    container.css("max-height", "100%");
    $("body").append(container);
    
    var zoomed_image = $('<img class="zoomed" src="' + image.attr("src") + (image.attr("srcset")? '" srcset="' + image.attr("srcset"): "") + '">');
    zoomed_image.css("width", image.attr("width")+"px");
    zoomed_image.css("max-width", "100%");
    zoomed_image.css("position", "absolute");
    zoomed_image.css("top", "50%");
    zoomed_image.css("left", "50%");
    zoomed_image.css("transform", "translate(-50%, -50%)");
    zoomed_image.css("opacity", 0);
    container.append(zoomed_image);
    

    
    container.animate({
        "width": "100%",
        "height": "100%",
        "top": "0",
        "left": "0",
    }, 300);
    zoomed_image.animate({
        "width": image.attr("data-full-width")+"px",
    }, { queue: false, duration: 300 });
    zoomed_image.animate({
        "opacity": 1
    }, { queue: false, duration: 100 });
    greyout.animate({"opacity": 1}, 300);
    
    greyout.click(function() {
        greyout.animate({"opacity": 0}, 300, "swing", function(){greyout.remove()});
        container.animate({"opacity": 0}, 300, "swing", function(){container.remove()});
        $("body").css("overflow", "auto")

    });
    
    
    
    return false;
});