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



});

function createPurchaseOrder() {

    if (document.getElementById("productTable").rows.length != 1) {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = dd + '-' + mm + '-' + yyyy;

        postOrder(today);

        var Id = getTopId();


        var table = document.getElementById('productTable');
        for (var r = 1, n = table.rows.length; r < n; r++) {
            var res = table.rows[r].cells[0].innerHTML;
            var quantity = table.rows[r].cells[2].innerHTML;
            postOrderPart(Id, res, quantity);
        }
        //alertManager(Id);
    }
    else {
        alert("The purchase order is empty!");
    }


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
        url: uri + "api/order/gettop",
        cache: false,
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
            //alert("Something went wrong!");
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
        },
        success: function (result) {
        }
    });
};


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


function getPartName() {

    var items = "";

    $.ajax({
        type: "GET",
        url: uri + "api/part",
        cache: false,
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
            //alert("Something went wrong!");
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

function alertManager(Id) {

    var msg = "Purchase Order " + Id + " is created!";
    sendNotification(msg, 1);
    //alertify.message(msg);
}