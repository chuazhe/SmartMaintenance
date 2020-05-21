var allId = new Array;
var myId = new Array;
var items = "";


$(document).ready(function ($) {

    getEnginePart();
    getPart();

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
        name = getPartName(allId[i]);
        items += "<li class='dropdown-item'><a >" + allId[i] + " " + name + "</a ></li>";

    }

    $('#SelectPartName').html(items);

    setDropdown();


});

function createPurchaseOrder() {

    var id = $('#routeDataId').val();

    var str = $('#dropdown').text();
    var res = str.substring(0, 4); //id

    postEnginePart(id, res);
}


function getPart() {


    $.ajax({
        type: "GET",
        url: uri + "api/part",
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
                allId.push(data[i].partId);
                //items += "<li class='dropdown-item'><a >" + data[i].partId + " " + data[i].partName + "</a ></li>";
                //console.log(items);

            }

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



function postEnginePart(EngineId, PartId) {
    $.ajax({
        type: "POST",
        url: uri + "api/enginepart/create",
        contentType: "application/json",
        async: false,
        data: JSON.stringify({ "EngineId": EngineId, "PartId": PartId }),
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

function getEnginePart() {

    var items = "";
    var id = $('#routeDataId').val();

    $.ajax({
        type: "GET",
        url: uri + "api/enginepart/getspecific/" + id,
        cache: false,
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                myId.push(data[i].partId);
                //console.log(data[i].partName);
                var name = getPartName(data[i].partId);
                //items += "<li class='dropdown-item'><a >" + data[i].partId + " " + name + "</a ></li>";
                //console.log(items);

            }

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

function setDropdown() {
    $(".dropdown-menu li a").click(function (e) {
        var selText = $(this).text();
        $(this).parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
        var str = selText;
        var res = str.substring(0, 4);
        //console.log(res);
    });
}