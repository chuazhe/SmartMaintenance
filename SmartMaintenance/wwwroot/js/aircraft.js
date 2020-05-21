$(document).ready(function ($) {

    getAircraft();

});

function getAircraft() {

    $("#tableAircraft").show();

    $.ajax({
        type: "GET",
        url: uri + "api/aircraft",
        cache: false,
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (data) {
            var tr;
            var status;

            console.log(data);

            for (var i = 0; i < data.length; i++) {
                if (data[i].aircraftStatus == 0) {
                    status = "In Maintenance";
                }
                else {
                    status = "In Service";
                }
                tr = tr + "<tr class=table-row data-href=" + web + "aircraft/details/" + data[i].aircraftId + ">";
                tr = tr + "<td>" + "AR" + data[i].aircraftId + "</td>";
                tr = tr + "<td>" + data[i].aircraftName + "</td>";
                tr = tr + "<td>" + status + "</td>";
            }
            $('#tableAircraft').append(tr);
            TableClickable();

            /*
            $.each(data, function (key, item) {
                //console.log(key);
                //console.log(item);
            });*/

        }
    })
};
