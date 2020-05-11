var allId = new Array;
var myId = new Array;
var res;


$(document).ready(function ($) {
    getAircraftPart();

    localStorage.clear();

});


function generatePlan() {

    console.log(allId);

    localStorage.setItem("id", JSON.stringify(allId));

}


function getPartName(partId) {
    var name = "";
    $.ajax({
        type: "GET",
        url: uri + "api/engine/getspecificname/" + partId,
        cache: false,
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
            //alert("Something went wrong!");
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

function getAircraftPart() {

    var items = "";

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
                var name = getPartName(data[i].engineId);
                items += "<li class='dropdown-item'><a >" + data[i].engineId + " " + name + "</a ></li>";
            }

            $('#SelectPartName').html(items);
            setDropdown();
        }

    })
};

function makePrediction() {
    var setting1 = document.getElementById("setting1").value;
    var setting2 = document.getElementById("setting2").value;
    var setting3 = document.getElementById("setting3").value;
    var s1 = document.getElementById("s1").value;
    var s2 = document.getElementById("s2").value;
    var s3 = document.getElementById("s3").value;
    var s4 = document.getElementById("s4").value;
    var s5 = document.getElementById("s5").value;
    var s6 = document.getElementById("s6").value;
    var s7 = document.getElementById("s7").value;
    var s8 = document.getElementById("s8").value;
    var s9 = document.getElementById("s9").value;
    var s10 = document.getElementById("s10").value;
    var s11 = document.getElementById("s11").value;
    var s12 = document.getElementById("s12").value;
    var s13 = document.getElementById("s13").value;
    var s14 = document.getElementById("s14").value;
    var s15 = document.getElementById("s15").value;
    var s16 = document.getElementById("s16").value;
    var s17 = document.getElementById("s17").value;
    var s18 = document.getElementById("s18").value;
    var s19 = document.getElementById("s19").value;
    var s20 = document.getElementById("s20").value;
    var s21 = document.getElementById("s21").value;

    var str = $('#dropdown').text();
    var res = str.substring(0, 4);
    if (isNaN(res)) {
        res = null;
    }
    
    $.ajax({
        type: "GET",
        url: uri + "api/notifications/predict/" + setting1 + "/" + setting2 + "/" + setting3 + "/" + s1 + "/" + s2 + "/" + s3 + "/" + s4 + "/" + s5 +
            "/" + s6 + "/" + s7 + "/" + s8 + "/" + s9 + "/" + s10 + "/" + s11 + "/" + s12 + "/" + s13 + "/" + s14 + "/" + s15 + "/" + s16 + "/" + s17
            + "/" + s18 + "/" + s19 + "/" + s20 + "/" + s21 + "/" + res,
        error: function (jqXHR, textStatus, errorThrown) {
            //alert("Something went wrong!");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (result) {
            //console.log(result);
            init = result.indexOf('[');
            fin = result.indexOf(']');
            var obj = result.substr(init + 1, fin - init - 1);
            console.log(obj);
            document.getElementById("result").innerHTML = obj;

            //console.log(res);
            let abc = parseInt($('#routeDataId').val());
            checkRUL2(obj, abc);

        }
    });


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

function checkRUL2(RUL, AircraftId) {
    if (RUL <= 40) {

        var str = $('#dropdown').text();
        res = str.substring(0, 4);
        getEnginePart(res);

        var msg = "Aircraft AR" + AircraftId + " is predicted to fail!";
        sendNotification(msg, 0);
        alertify.error(msg);
    }
}


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
                console.log(data[i].partId);

                allId.push(data[i].partId);
            }

        }
    })
};