$(document).ready(function ($) {

    getApproveOrder();

});

function getApproveOrder() {

    $("#tableApproveOrder").show();

    $.ajax({
        type: "GET",
        url: uri + "api/Order",
        cache: false,
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (data) {
            var tr;
            //console.log(data);

            for (var i = 0; i < data.length; i++) {
                if (data[i].orderApprove == 0) {
                    tr = tr + "<tr class=table-row data-href=" + web + "approve/confirm/" + data[i].orderId + ">";
                    tr = tr + "<td>" + data[i].orderId + "</td>";
                    tr = tr + "<td>" + data[i].orderDate + "</td>";
                }
            }
            $('#tableApproveOrder').append(tr);
            TableClickable();
        }
    })
};
