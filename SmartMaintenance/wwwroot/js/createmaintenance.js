var allId = new Array;
var myId = new Array;

$(document).ready(function ($) {

    getAircraftEngine();

    var uniqueNames = getUnique(allId);
    uniqueNames.sort();

    var items = "";

    for (let i = 0; i < uniqueNames.length; i++) {
        var name = getPartName(uniqueNames[i]);
        items += "<li class='dropdown-item'><a >" + uniqueNames[i] + " " + name + "</a ></li>";

    }


    $('#SelectPartName').html(items);
    setDropdown();

    $('#add').click(function (e) {

        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());


        $('#quantity').val(quantity + 1);

    });

    $('#minus').click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());


        if (quantity > 0) {
            $('#quantity').val(quantity - 1);
        }
    });

    if ($("#productTable tbody").length == 0) {
        $("#productTable").append("<tbody></tbody>");
    }

    //productsAdd();

});


function getUnique(array) {
    var uniqueArray = [];
    // Loop through array values
    for (i = 0; i < array.length; i++) {
        if (uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}

function showTableData() {

    /*
    var x = document.getElementById("productTable").rows.length;
    console.log(x);
    */

    var table = document.getElementById('productTable');
    for (var r = 1, n = table.rows.length; r < n; r++) {
        for (var c = 0, m = table.rows[r].cells.length; c < 3; c++) {
            alert(table.rows[r].cells[c].innerHTML);

        }
    }

}


function productAddToTable() {
    var str = $('#dropdown').text();
    var res = str.substring(0, 4); //id
    var name = str.substring(5);

    var quantity = $('#quantity').val();

    if (quantity != 0 && res != "Sele") {

        var x = document.getElementById("productTable").rows.length;
        $("#productTable tbody").append(
            "<tr>" +
            "<td style='width:30%'>" + res +
            "</td>" +
            "<td style='width:30%'>" + name +
            "</td>" +
            "<td style='width:20%'>" + quantity +
            "</td>" +
            "<td style='width:20%'>" +
            "<button type='button'" +
            "onclick='productDelete(this);' " +
            "class='btn btn-default'>" +
            "<span class='fa fa-window-close fa-2x' />" +
            "</button>" +
            "</td>" +
            "</tr>"
        );

    }
}

function productDelete(ctl) {
    $(ctl).parents("tr").remove();
}


async function createMaintenancePlan() {

    if (document.getElementById("productTable").rows.length != 1) {
        var id = $('#routeDataId').val();

        var result = 1;
        var finalresult = 1;


        var table = document.getElementById('productTable');
        for (var r = 1, n = table.rows.length; r < n; r++) {
            var res = table.rows[r].cells[0].innerHTML;
            //var quantity = table.rows[r].cells[2].innerHTML;
            result = checkPart(res, 1);
            if (result == 0) {
                prompt(res);
                finalresult = 0;
            }

        }


        if (result == 1 && finalresult == 1) {
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = dd + '-' + mm + '-' + yyyy;


            postMaintenance(id, today);

            var Id = getTopId();

            var table = document.getElementById('productTable');
            for (var r = 1, n = table.rows.length; r < n; r++) {
                console.log(res);
                var res = table.rows[r].cells[0].innerHTML;
                var quantity = table.rows[r].cells[2].innerHTML;

                postMaintenancePart(Id, res, quantity);

                //alertManager(Id);

            }



        }
    }

}



function prompt(res) {
    alertify.prompt("Part Id PT" + res + " is not available!", "Would you like to order? Please enter the quantity.", "",
        function (evt, value) {
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = dd + '-' + mm + '-' + yyyy;

            postOrder(today);

            var Id = getTopId2();
            //console.log(Id);
            postOrderPart(Id, res, value);
            alertManager(Id);

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
            console.log("Good!");
        }
    });
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
                /*
                name = getPartName(allId[i]);
                items += "<li class='dropdown-item'><a >" + allId[i] + " " + name + "</a ></li>";
                */

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

function alertManager(Id) {

    var msg = "Purchase Order " + Id + " is created!";
    sendNotification(msg, 1);
    //alertify.message(msg);
}