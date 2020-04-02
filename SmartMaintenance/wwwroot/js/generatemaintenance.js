var part = new Array;
var quantity = new Array;

$(document).ready(function ($) {

    var tr;
    var names = window.localStorage.getItem('id');

    names = names.replace("[", "");
    names = names.replace("]", "");
    var nameArr = names.split(',');
    //console.log(nameArr[0]);

    nameArr.sort();
    foo(nameArr);

    /*
    console.log(part);
    console.log(quantity);
    */

    //console.log(`localStorage ${key}:  ${value}`);

    for (let i = 0; i < part.length; i++)
  {
    tr = tr + "<tr class=table-row>";
    tr = tr + "<td>" + part[i] + "</td>";
    var name = getPartName(part[i]);
        tr = tr + "<td>" + name + "</td>";
        tr = tr + "<td>" + quantity[i] + "</td>";
        tr = tr + "<td style='width:20%'><button type='button' onclick='productDelete(this)' class='btn btn-default'><span class='fa fa-window-close fa-2x' /></button>";
    }

    $('#add').click(function (e) {

        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());

        // If is not undefined

        $('#quantity').val(quantity + 1);


        // Increment

    });

    $('#minus').click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());

        // If is not undefined

        // Increment
        if (quantity > 0) {
            $('#quantity').val(quantity - 1);
        }
    });


    /*
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage[key];
        tr = tr + "<tr class=table-row>";
        tr = tr + "<td>" + localStorage.key(i) + "</td>";
        var name = getPartName(localStorage.key(i));
        tr = tr + "<td>" + name + "</td>";
        console.log(`localStorage ${key}:  ${value}`);
    }
    */
    $('#tableMaintenancePart').append(tr);


    $("#tableMaintenancePart").show();

    getPartName2();


});


function foo(arr) {
    var prev;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== prev) {
            part.push(arr[i]);
            quantity.push(1);
        } else {
            quantity[quantity.length - 1]++;
        }
        prev = arr[i];
    }
}


function productDelete(ctl) {
    $(ctl).parents("tr").remove();
}

function productAddToTable() {
    var str = $('#dropdown').text();
    var res = str.substring(0, 4); //id
    var name = str.substring(5);

    var quantity = $('#quantity').val();

    if (quantity != 0 && res != "Sele") {
        var x = document.getElementById("tableMaintenancePart").rows.length;
        $("#tableMaintenancePart tbody").append(
            "<tr>" +
            "<td style='width:30%'>" + res +
            "</td>" +
            "<td style='width:30%'>" + name +
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

function getPartName2() {

    var items = "";

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
                items += "<li class='dropdown-item'><a >" + data[i].partId + " " + data[i].partName + "</a ></li>";
                //console.log(items);

            }
            $('#SelectPartName').html(items);


            setDropdown();

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

async function createMaintenancePlan() {

    var id = $('#routeDataId').val();

    var result = 1;
    var finalresult = 1;


    var table = document.getElementById('tableMaintenancePart');
    for (var r = 1, n = table.rows.length; r < n; r++) {
        var res = table.rows[r].cells[0].innerHTML;
        //var quantity = table.rows[r].cells[2].innerHTML;
        result = checkPart(res, 1);
        if (result == 0) {
            prompt(res);
            finalresult = 0;
        }

    }



    if (result==1 && finalresult==1) {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = dd + '-' + mm + '-' + yyyy;


        postMaintenance(id, today);

        var Id = getTopId();

        var table = document.getElementById('tableMaintenancePart');
        for (var r = 1, n = table.rows.length; r < n; r++) {
            var res = table.rows[r].cells[0].innerHTML;
            var quantity = table.rows[r].cells[2].innerHTML;

            postMaintenancePart(Id, res, quantity);



            //alertManager(Id);


        }



    }

    //var second = document.getElementById("seconds").value;

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
            alertify.error("Part Id Part" + res + " is missing!");
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

function sendNotification(x, value) {
    //var x = document.getElementById("msg").value;
    console.log(x);

    $.ajax({
        type: "POST",
        url: uri + "api/notifications/sendnoti",
        contentType: "application/json",
        async: false,
        data: JSON.stringify({ "msg": x, "manager": value }),
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (result) {
            alertify.success("Notification sent!");
        }
    });
};

function alertManager(Id) {

    var msg = "Purchase Order PO" + Id + " is created!";
    sendNotification(msg, 1);
    //alertify.message(msg);
}