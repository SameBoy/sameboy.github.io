var sample = "molemania";
var filter = "nearestneighbor";

function update_filter_demo()
{
    document.getElementById("scaling-image").src = sample + "_" + filter + ".png";
}

$(".filter-demo li").click(function() {
    filter = this.id;
    update_filter_demo();
    $(".filter-demo li").removeClass("selected");
    $(this).addClass("selected");
});
$(".filter-demo .sample").click(function() {
    sample = this.id;
    if (sample == "molemania") {
        document.getElementById("lcd").innerText = "Monochrome LCD Display";
    }
    else {
        document.getElementById("lcd").innerText = "LCD Display";
    }
    update_filter_demo();
});