var allId = new Array;
var myId = new Array;
var items = "";


$(document).ready(function ($) {

    getAircraftEngine();
    getEngine();

    for (let i = 0; i < myId.length; i++) {
        const index = allId.indexOf(myId[i]);
        if (index > -1) {
            allId.splice(index, 1);
        }
    }

    // array = [2, 9]
    console.log(allId);
    
    var name;

    for (let i = 0; i < allId.length; i++) {
        name = getEngineName(allId[i]);
        items += "<li class='dropdown-item'><a >" + allId[i] + " " + name + "</a ></li>";

    }

    $('#SelectPartName').html(items);

    setDropdown();
    

});

function createPurchaseOrder() {

    var id = $('#routeDataId').val();

    var str = $('#dropdown').text();
    var res = str.substring(0, 4); //id

    postAircraftEngine(id, res);



}


function getEngine() {


    $.ajax({
        type: "GET",
        url: uri + "api/engine",
        cache: false,
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (data) {
            for (var i = 0; i < data.length; i++) {

                //console.log(data[i].partName);
                allId.push(data[i].engineId);
                //items += "<li class='dropdown-item'><a >" + data[i].partId + " " + data[i].partName + "</a ></li>";
                console.log(items);

            }

        }
    })
};


function getEngineName(partId) {
    var name = "";
    $.ajax({
        type: "GET",
        url: uri + "api/engine/getspecificname/" + partId,
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
            name = data;

        }
    })
    return name;

}



function postAircraftEngine(EngineId, PartId) {
    $.ajax({
        type: "POST",
        url: uri + "api/aircraftengine/create",
        contentType: "application/json",
        async: false,
        data: JSON.stringify({ "AircraftId": EngineId, "EngineId": PartId }),
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (result) {
            //console.log("Good!");
        }
    });
};

function getAircraftEngine() {

    var items = "";
    var id = $('#routeDataId').val();

    $.ajax({
        type: "GET",
        url: uri + "api/aircraftengine/getspecific/" + id,
        cache: false,
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                myId.push(data[i].engineId);
                //console.log(data[i].partName);
                var name = getEngineName(data[i].engineId);
                //items += "<li class='dropdown-item'><a >" + data[i].partId + " " + name + "</a ></li>";
                //console.log(items);

            }

        }
    })
};


function setDropdown() {
    $(".dropdown-menu li a").click(function (e) {
        var selText = $(this).text();
        $(this).parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
        var str = selText;
        var res = str.substring(0, 4);
        //console.log(res);
    });
}