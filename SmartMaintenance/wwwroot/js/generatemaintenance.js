$(document).ready(function ($) {


    var tr;

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage[key];
        tr = tr + "<tr class=table-row>";
        tr = tr + "<td>" + localStorage.key(i) + "</td>";
        var name = getPartName(localStorage.key(i));
        tr = tr + "<td>" + name + "</td>";
        console.log(`localStorage ${key}:  ${value}`);
    }
    $('#tableMaintenancePart').append(tr);


    $("#tableMaintenancePart").show();


    var str = localStorage.key(0);
    if (isNaN(str)) {
        str = null;
    }

    var str2 = localStorage.key(1);
    if (isNaN(str2)) {
        str2 = null;
    }

    var str3 = localStorage.key(2);
    if (isNaN(str3)) {
        str3 = null;
    }

    var str4 = localStorage.key(3);
    if (isNaN(str4)) {
        str4 = null;
    }

    console.log(str+str2+str3+str4);

});

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

async function createMaintenancePlan() {

    var str = localStorage.key(0);
    if (isNaN(str)) {
        str = null;
    }

    var str2 = localStorage.key(1);
    if (isNaN(str2)) {
        str2 = null;
    }

    var str3 = localStorage.key(2);
    if (isNaN(str3)) {
        str3 = null;
    }

    var str4 = localStorage.key(3);
    if (isNaN(str4)) {
        str4 = null;
    }

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


    var result = checkPart(str, quantity);
    var result2 = checkPart(str2, quantity2);
    var result3 = checkPart(str3, quantity3);
    var result4 = checkPart(str4, quantity4);


    if (result || result2 || result3 || result4) {
        postMaintenance(id, today);
        var Id2 = getTopId();
        postMaintenancePart(Id2, str, quantity);
        postMaintenancePart(Id2, str2, quantity2);
        postMaintenancePart(Id2, str3, quantity3);
        postMaintenancePart(Id2, str4, quantity4);
        // Notification
        setNoti();
    }
    else {
        if (!result && str != null) {
            prompt(str);
        }
        if (!result2 && str2 != null) {
            prompt(str2);

        }
        if (!result3 && str3 != null) {
            prompt(str3);

        }
        if (!result4 && str4 != null) {
            prompt(str4);

        }

    }

}

function prompt(res) {
    alertify.prompt("Part Id " + res + " is not available!", "Would you like to order? Please enter the quantity.", "",
        function (evt, value) {
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = dd + '-' + mm + '-' + yyyy;

            postOrder(today);

            var Id = getTopId2();
            console.log(Id);
            postOrderPart(Id, res, value);
        },
        function () {
            alertify.error("Part Id " + res + " is missing!");
        })
        ;
}

function postOrder(today) {
    $.ajax({
        type: "POST",
        url: uri + "api/order/create",
        contentType: "application/json",
        async: false,
        data: JSON.stringify({ "OrderDate": today, "OrderApprove": "0" }),
        error: function (jqXHR, textStatus, errorThrown) {
        },
        success: function (result) {
            alertify.success("Purchase Order is created!");
        }
    });
};

function postOrderPart(OrderId, PartId, Count) {
    $.ajax({
        type: "POST",
        url: uri + "api/orderpart/create",
        contentType: "application/json",
        async: false,
        data: JSON.stringify({ "OrderId": OrderId, "PartId": PartId, "Quantity": Count }),
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (result) {
            console.log(result);
        }
    });
};


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

function getTopId2() {
    var topId = 0;
    $.ajax({
        type: "GET",
        url: uri + "api/order/gettop",
        cache: false,
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");
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