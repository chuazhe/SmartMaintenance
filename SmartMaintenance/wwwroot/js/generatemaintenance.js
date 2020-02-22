$(document).ready(function ($) {

    //getPartName();
    console.log(localStorage.getItem("result1"));
    console.log(localStorage.getItem("result2"));
    console.log(localStorage.getItem("result3"));
    console.log(localStorage.getItem("result4"));

    if (localStorage.getItem("result1")) {
        console.log("good");

    }


});

async function createMaintenancePlan() {

    var str = $('#dropdown').text();
    var res = str.substring(0, 4);
    if (isNaN(res)) {
        res = null;
    }

    var str2 = $('#dropdown2').text();
    var res2 = str2.substring(0, 4);
    if (isNaN(res2)) {
        res2 = null;
    }

    var str3 = $('#dropdown3').text();
    var res3 = str3.substring(0, 4);
    if (isNaN(res3)) {
        res3 = null;
    }

    /*
    var quantity = $('#quantity').val();

    var quantity2 = $('#quantity2').val();

    var quantity3 = $('#quantity3').val();

    var quantity4 = $('#quantity4').val();
    */

    var quantity = 1;

    var quantity2 = 1;

    var quantity3 = 1;

    var quantity4 = 1;

    var id = $('#routeDataId').val();

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '-' + mm + '-' + yyyy;

    //var second = document.getElementById("seconds").value;


    var result = checkPart(res, quantity);
    var result2 = checkPart(res2, quantity2);
    var result3 = checkPart(res3, quantity3);
    var result4 = checkPart(res4, quantity4);


    if (result || result2 || result3 || result4) {
        postMaintenance(id, today);
        var Id2 = getTopId();
        postMaintenancePart(Id2, res, quantity);
        postMaintenancePart(Id2, res2, quantity2);
        postMaintenancePart(Id2, res3, quantity3);
        postMaintenancePart(Id2, res4, quantity4);
        // Notification
        setNoti();
    }
    else {
        if (!result && res != null) {
            alertify.error("Part Id " + res + " is missing!");
        }
        if (!result2 && res2 != null) {
            alertify.error("Part Id " + res2 + " is missing!");
        }
        if (!result3 && res3 != null) {
            alertify.error("Part Id " + res3 + " is missing!");
        }
        if (!result4 && res4 != null) {
            alertify.error("Part Id " + res4 + " is missing!");
        }

    }

}


function setNoti() {
    $.ajax({
        type: 'POST',
        url: uri + 'api/notifications/setnoti/' + document.getElementById("seconds").value + "/" + $('#routeDataId').val(),
        success: function (data) {
        },
        error: function (error) {
        }
    })
}

function checkPart(id, count) {
    var result;
    $.ajax({
        type: 'GET',
        url: uri + "api/part/getget",
        dataType: 'json',
        async: false,
        data: { "id": id, "count": count },
        success: function (data) {
            result = true;
        },
        error: function (error) {
            result = false;
        }
    })
    return result;
}

function postMaintenance(AircraftId, today) {
    $.ajax({
        type: "POST",
        url: uri + "api/maintenance/create",
        contentType: "application/json",
        async: false,
        data: JSON.stringify({ "AircraftId": AircraftId, "MaintenanceDate": today }),
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (result) {
            //console.log("Good!");
            alertify.success("Maintenance Plan is created!");
        }
    });
};

function getTopId() {
    var topId = 0;
    $.ajax({
        type: "GET",
        url: uri + "api/maintenance/gettop",
        cache: false,
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (data) {
            topId = data;
        }
    });

    return topId;

};

function postMaintenancePart(MaintenanceId, PartId, Count) {
    $.ajax({
        type: "POST",
        url: uri + "api/maintenancepart/create",
        contentType: "application/json",
        async: false,
        data: JSON.stringify({ "MaintenanceId": MaintenanceId, "PartId": PartId, "PartCount": Count }),
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

function getPartName() {

    var items = "";

    $.ajax({
        type: "GET",
        url: uri + "api/part",
        cache: false,
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                //console.log(data[i].partName);
                items += "<li class='dropdown-item'><a >" + data[i].partId + " " + data[i].partName + "</a ></li>";
                //console.log(items);

            }
            $('#SelectPartName').html(items);
            $('#SelectPartName2').html(items);
            $('#SelectPartName3').html(items);
            $('#SelectPartName4').html(items);



            setDropdown();

        }
    })
};