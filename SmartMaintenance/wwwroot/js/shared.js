
const web = "https://localhost:44300/";
const uri = "http://localhost:4000/";


/*Menu Toggle Script*/
$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");

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

function sendNotification(x,value) {
    //var x = document.getElementById("msg").value;
    console.log(x);

    $.ajax({
        type: "POST",
        url: uri + "api/notifications/sendnoti",
        contentType: "application/json",
        async: false,
        data: JSON.stringify({ "msg": x,"manager": value }),
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (result) {
            alertify.success("Notification sent!");
        }
    });
};

function checkRUL(RUL, AircraftId) {
    if (RUL <= 40) {
        var msg = "Aircraft AR" + AircraftId + " is predicted to fail!";
        sendNotification(msg, 0);
        alertify.error(msg);
    }
}