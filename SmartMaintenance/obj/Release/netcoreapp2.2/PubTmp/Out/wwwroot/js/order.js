$(document).ready(function ($) {

    getOrder();

});

function getOrder() {

    $("#tableOrder").show();

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
            var approve;
            //console.log(data);

            for (var i = 0; i < data.length; i++) {
                if (data[i].orderApprove == 0) {
                    approve = "No";
                }
                else {
                    approve = "Yes";
                }

                tr = tr + "<tr class=table-row data-href=" + web + "Purchase/details/" + data[i].orderId + ">";
                tr = tr + "<td>" + "PO" + data[i].orderId + "</td>";
                tr = tr + "<td>" + data[i].orderDate + "</td>";
                tr = tr + "<td>" + approve + "</td>";

            }
            $('#tableOrder').append(tr);
            TableClickable();

            /*
            $.each(data, function (key, item) {
                //console.log(key);
                //console.log(item);

            });*/

        }
    })
};


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