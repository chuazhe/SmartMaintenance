$(document).ready(function ($) {

    var id = $('#routeDataId').val();

    getPlan(id);

});

function getPlan(AircraftId) {

    $("#tableMaintenance").show();

    $.ajax({
        type: "GET",
        url: uri + "api/Maintenance/getUnused/"+AircraftId,
        cache: false,
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (data) {
            var tr;
            console.log(data);

            for (var i = 0; i < data.length; i++) {
                tr = tr + "<tr class=table-row data-href=" + web + "Plan/confirm/" + data[i].maintenanceId + ">";
                tr = tr + "<td>" + data[i].maintenanceId + "</td>";
                tr = tr + "<td>" + data[i].maintenanceDate + "</td>";

            }
            $('#tableMaintenance').append(tr);
            TableClickable();

            /*
            $.each(data, function (key, item) {
                //console.log(key);
                //console.log(item);

            });*/

        }
    })
};