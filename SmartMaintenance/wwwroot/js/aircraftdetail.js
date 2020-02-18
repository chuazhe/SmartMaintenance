$(document).ready(function ($) {

});

function changeToMaintenance() {
    $.ajax({
        type: "PUT",
        url: uri + "api/aircraft/maintenance/" + $('#routeDataId').val(),
        cache: false,
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);

        },
        error: function (data) {
            alert(data.responseText);
        }, //End of AJAX error function  
        success: function (data) {
            alertify.success("Changed to In Maintenance");

        }
    })
}

function changeToInService() {

    $.ajax({
        type: "PUT",
        url: uri + "api/aircraft/service/" + $('#routeDataId').val(),
        cache: false,
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);

        },
        error: function (data) {
            alert(data.responseText);
        }, //End of AJAX error function  
        success: function (data) {
            alertify.success("Changed to In Service");

        }
    })
}

function autoPredict() {
    checkRUL(29, $('#routeDataId').val());
}
