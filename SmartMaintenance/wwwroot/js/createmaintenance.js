$(document).ready(function ($) {

    getPartName();

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

    if ($("#productTable tbody").length == 0) {
        $("#productTable").append("<tbody></tbody>");
    }

    //productsAdd();


});

function test() {

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

    var x = document.getElementById("productTable").rows.length;
    $("#productTable tbody").append(
        "<tr>" +
        "<td style='width:30%'>" + res +
        "</td>" +
        "<td style='width:30%'>"+name+
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

function productDelete(ctl) {
    $(ctl).parents("tr").remove();
}


function productsAdd() {
    $("#productTable tbody").append(
        "<tr>" +
        "<td>My First Video</td>" +
        "<td>6/11/2015</td>" +
        "<td>www.pluralsight.com</td>" +
        "<td>" +
        "<td>www.pluralsight.com</td>" +
        "<button type='button' " +
        "onclick='productDelete(this);' " +
        "class='btn btn-default'>" +
        "<span class='fa fa-edit' />" +
        "</button>" +
        "</td>" +
        "</tr>"
    );
    /*
     <div class="form-group">
  <label for="usr">Name:</label>
  <input type="text" class="form-control" id="usr">
</div>
      
   * /
}

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

    var str4 = $('#dropdown4').text();
    var res4 = str4.substring(0, 4);
    if (isNaN(res4)) {
        res4 = null;
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
        if (!result && res !=null) {
            prompt(res);
        }
        if (!result2 && res2 != null) {
            prompt(res2);

        }
        if (!result3 && res3 != null) {
            prompt(res3);

        }
        if (!result4 && res4 != null) {
            prompt(res4);

        }

    }

}



function prompt(res) {
    alertify.prompt("Part Id " + res + " is not available!","Would you like to order? Please enter the quantity.", "",
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
        data: { "id":id, "count":count },
        success: function (data) {
            result = true;
        },
        error: function (error) {
            result = false;
        }
    })
    return result;
}


function postMaintenance(AircraftId,today) {
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