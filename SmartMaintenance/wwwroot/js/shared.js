
const web = "https://localhost:44300/";
const uri = "http://localhost:4000/";

/*Menu Toggle Script*/
$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    //Change the icon of the button
    /*
    var icon = $(this).find("svg");
    if(icon.hasClass("fa-arrow-left")){
        icon.addClass("fa-bars").removeClass("fa-arrow-left");
    }else {
        icon.addClass("fa-arrow-left").removeClass("fa-bars");
    }
    */

});

function SetActiveClass(className) {
    console.log(className);
}

function TableClickable() {
    $(".table-row").click(function () {
        window.document.location = $(this).data("href");
    });
};

function StillInDevelopment() {
    alertify.error('Still In Development');
}



//Menu Click Script
/*
$('.list-group-item').on('click', function () {

    var $this = $(this);
    //var $alias = $this.data('alias');

    $('.active').removeClass('active');
    $this.toggleClass('active')

    // Pass clicked link element to another function
    //myfunction($this, $alias)
})*/