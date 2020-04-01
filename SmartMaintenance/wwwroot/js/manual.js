
$(document).ready(function ($) {
    getAircraftPart();

    localStorage.clear();

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage[key];
        console.log(`localStorage ${key}:  ${value}`);
    }

});


function generatePlan() {

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage[key];
        console.log(`localStorage ${key}:  ${value}`);
    }


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
            console.log(data);
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
            console.log(data);
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

    
    if (res == 1001) {
        var url = "http://2a3b8cca-f197-446d-93c1-75d875006c89.southeastasia.azurecontainer.io/score";

    }
    else if (res == 1002) {
        var url = "http://bb041ef8-6c35-460a-ab36-1b0fde1b7690.southeastasia.azurecontainer.io/score";

    }
    else if (res == 1003) {
        var url = "http://bee85316-4989-4a5f-a470-87949630f2b5.southeastasia.azurecontainer.io/score";

    }
    else if (res == 1004) {
        var url = "http://96a20a4b-95a0-4ffa-8235-a352fb3e9538.southeastasia.azurecontainer.io/score";

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
            console.log(result);
            init = result.indexOf('[');
            fin = result.indexOf(']');
            var obj = result.substr(init + 1, fin - init - 1);
            console.log(obj);
            document.getElementById("result").innerHTML = obj;
            console.log(res);

            checkRUL(obj, $('#routeDataId').val(),res);

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