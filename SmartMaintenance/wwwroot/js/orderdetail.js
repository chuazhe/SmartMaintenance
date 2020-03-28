$(document).ready(function ($) {

    getOrderDetails();
    getOrderPart();
});

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

function getOrderPart() {

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
                tr = tr + "<td>"+"PT" + data[i].partId + "</td>";
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