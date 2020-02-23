$(document).ready(function ($) {
    getAircraftPart();
    getPartName();

    localStorage.clear();

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage[key];
        console.log(`localStorage ${key}:  ${value}`);
    }

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

    getAircraftPartId();
}


function getAircraftPartId() {

    var id = $('#routeDataId').val();

    $("#tableAircraftPart").show();

    $.ajax({
        type: "GET",
        url: uri + "api/aircraftpart/getspecific/" + id,
        cache: false,
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
            // alert("Something went wrong!");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (data) {
            //console.log(data);
            for (var i = 0; i < data.length; i++) {
                checkRUL(29, $('#routeDataId').val(), data[i].partId);

            }


        }

    })
};

function getAircraftPart() {

    var id = $('#routeDataId').val();

    $("#tableAircraftPart").show();

    $.ajax({
        type: "GET",
        url: uri + "api/aircraftpart/getspecific/" + id,
        cache: false,
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
           // alert("Something went wrong!");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (data) {
            //console.log(data);
            var tr;
            for (var i = 0; i < data.length; i++) {
                tr = tr + "<tr class=table-row>";
                tr = tr + "<td>" + data[i].partId + "</td>";
                var name = getPartName(data[i].partId);
                tr = tr + "<td>" + name + "</td>";
            }
            $('#tableAircraftPart').append(tr);


        }

    })
};

function getPartName(partId) {
    var name = "";
    $.ajax({
        type: "GET",
        url: uri + "api/part/getspecificname/" + partId,
        cache: false,
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
            //alert("Something went wrong!");
            //console.log(jqXHR);
            //console.log(textStatus);
            //console.log(errorThrown);
        },
        success: function (data) {
            //console.log(data);
            name = data;

        }
    })
    return name;

}
