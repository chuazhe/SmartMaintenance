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

    $('#addSecond').click(function (e) {

        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity2').val());

        // If is not undefined

        $('#quantity2').val(quantity + 1);


        // Increment

    });

    $('#minusSecond').click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity2').val());

        // If is not undefined

        // Increment
        if (quantity > 0) {
            $('#quantity2').val(quantity - 1);
        }
    });

    $('#addThird').click(function (e) {

        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity3').val());

        // If is not undefined

        $('#quantity3').val(quantity + 1);


        // Increment

    });

    $('#minusThird').click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity3').val());

        // If is not undefined

        // Increment
        if (quantity > 0) {
            $('#quantity3').val(quantity - 1);
        }
    });
});


function createMaintenancePlan() {

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

    var quantity = $('#quantity').val();

    var quantity2 = $('#quantity2').val();

    var quantity3 = $('#quantity3').val();

    var id = $('#routeDataId').val();
    console.log(id);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '-' + mm + '-' + yyyy;

    console.log(today);

    var minute = document.getElementById("minute").value;
    console.log(minute);

}


function postMaintenance(today) {
    $.ajax({
        type: "POST",
        url: uri + "api/maintenance/create",
        contentType: "application/json",
        async: false,
        data: JSON.stringify({ "AircraftId": today, "MaintenanceDate": today }),
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (result) {
            console.log("Good!");
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

function postOrderPart(MaintenanceId, PartId, Count) {
    $.ajax({
        type: "POST",
        url: uri + "api/maintenancepart/create",
        contentType: "application/json",
        async: false,
        data: JSON.stringify({ "MaintenanceId": MaintenanceId, "PartId": PartId, "Quantity": Count }),
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (result) {
            console.log("Good!");
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
            $('#SelectPartName2').html(items);
            $('#SelectPartName3').html(items);


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
        console.log(res);
    });
}