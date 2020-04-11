var allId = new Array;
var myId = new Array;

$(document).ready(function ($) {
    getAircraftPart();
    //getPartName();

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

    getAircraftEngine();
    console.log(allId);
    var id = $('#routeDataId').val();


    localStorage.setItem("id", JSON.stringify(allId));

    //checkRUL(29, id);
}


function getAircraftPart() {

    var id = $('#routeDataId').val();

    $("#tableAircraftPart").show();

    $.ajax({
        type: "GET",
        url: uri + "api/aircraftengine/getspecific/" + id,
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
                tr = tr + "<td>"+"EG" + data[i].engineId + "</td>";
                var name = getPartName(data[i].engineId);
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
        url: uri + "api/engine/getspecificname/" + partId,
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


function getAircraftEngine() {

    var id = $('#routeDataId').val();

    $.ajax({
        type: "GET",
        url: uri + "api/aircraftengine/getspecific/" + id,
        cache: false,
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (data) {
            //console.log(data);
            for (var i = 0; i < data.length; i++) {
                getEnginePart(data[i].engineId);

            }


        }
    })
};

function getEnginePart(engineId) {


    $.ajax({
        type: "GET",
        url: uri + "api/enginepart/getspecific/" + engineId,
        cache: false,
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (data) {
            //console.log(data);
            for (var i = 0; i < data.length; i++) {
                //console.log(data[i].partId);

                allId.push(data[i].partId);
            }


        }
    })
};