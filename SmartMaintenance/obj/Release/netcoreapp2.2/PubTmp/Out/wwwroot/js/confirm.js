$(document).ready(function ($) {

    getOrderDetails();
    getOrderPart2();
});


function approve() {

    approveOrder();
    getOrderPart();
}


function approveOrder() {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '-' + mm + '-' + yyyy;

    $.ajax({
        type: "PUT",
        url: uri + "api/order/approve/" + $('#routeDataId').val() + "/" + today,
        cache: false,
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);

        },
        error: function (data) {
            alert(data.responseText);
        }, //End of AJAX error function  
        success: function (data) {
            console.log(data);

        }
    })
};

function getOrderPart() {
    var id = $('#routeDataId').val();

    $.ajax({
        type: "GET",
        url: uri + "api/orderpart/getspecific/" + id,
        cache: false,
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (data) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                addPart(data[i].partId, data[i].quantity);
            }

        }
    })

}

function addPart(PartId, PartCount) {
    $.ajax({
        type: "PUT",
        url: uri + "api/part/add/" + PartId + "/" + PartCount,
        cache: false,
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (data) {


        }
    })


}

function getOrderDetails() {

    var id = $('#routeDataId').val();

    $("#tableOrderDetails").show();

    $.ajax({
        type: "GET",
        url: uri + "api/order/getspecific/" + id,
        cache: false,
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (data) {
            var tr;
            var approve;

            for (var i = 0; i < data.length; i++) {
                if (data[i].orderApprove == 0) {
                    approve = "No";
                }
                else {
                    approve = data[i].orderApproveDate;
                }
                tr = tr + "<td>" + data[i].orderDate + "</td>";
                tr = tr + "<td>" + approve + "</td>";
            }
            $('#tableOrderDetails').append(tr);


        }
    })
};

function getOrderPart2() {

    var id = $('#routeDataId').val();

    $("#tableOrderPart").show();

    $.ajax({
        type: "GET",
        url: uri + "api/orderpart/getspecific/" + id,
        cache: false,
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (data) {
            console.log(data);
            var tr;
            for (var i = 0; i < data.length; i++) {
                tr = tr + "<tr class=table-row>";
                tr = tr + "<td>" + "PT" + data[i].partId + "</td>";
                var name = getPartName(data[i].partId);
                tr = tr + "<td>" + name + "</td>";
                tr = tr + "<td>" + data[i].quantity + "</td>";
            }
            $('#tableOrderPart').append(tr);


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
            console.log(data);
            name = data;

        }
    })
    return name;

}