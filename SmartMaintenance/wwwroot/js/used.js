$(document).ready(function ($) {

    getPlan();

});

function getPlan() {

    $("#tablePlan").show();

    $.ajax({
        type: "GET",
        url: uri + "api/Maintenance/getDone",
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
                var result;
                if (data[i].maintenanceUsed == 0) {
                    result = "No";
                }
                else {
                    result = "Yes";
                }

                tr = tr + "<tr class=table-row data-href=" + web + "Plan/details/" + data[i].maintenanceId + ">";
                tr = tr + "<td>" + "MP" + data[i].maintenanceId + "</td>";
                tr = tr + "<td>" + "AR" + data[i].aircraftId + "</td>";
                tr = tr + "<td>" + data[i].maintenanceDate + "</td>";
                tr = tr + "<td>" + result + "</td>";


            }
            $('#tablePlan').append(tr);
            TableClickable();

            /*
            $.each(data, function (key, item) {
                //console.log(key);
                //console.log(item);

            });*/

        }
    })
};
