$(document).ready(function ($) {

    getMaintenanceDetails();
    getMaintenancePart();
});

function getMaintenanceDetails() {

    var id = $('#routeDataId').val();

    $("#tableMaintenanceDetails").show();

    $.ajax({
        type: "GET",
        url: uri + "api/maintenance/getspecific/"+id,
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
            for (var i = 0; i < data.length; i++) {
                tr = tr + "<td>" + data[i].aircraftId + "</td>";
                tr = tr + "<td>" + data[i].maintenanceDate + "</td>";
            }
            $('#tableMaintenanceDetails').append(tr);


        }
    })
};

function getMaintenancePart() {

    var id = $('#routeDataId').val();

    $("#tableMaintenancePart").show();

    $.ajax({
        type: "GET",
        url: uri + "api/maintenancepart/getspecific/" + id,
        cache: false,
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (data) {
            //console.log(data);
            var tr;
            for (var i = 0; i < data.length; i++) {
                tr = tr + "<tr class=table-row>";
                tr = tr + "<td>" + data[i].partId + "</td>";
                var name = getPartName(data[i].partId);
                tr = tr + "<td>" + name + "</td>";
                //tr = tr + "<td>" + data[i].partCount + "</td>";
            }
            $('#tableMaintenancePart').append(tr);


        }
    })
};

function getPartName(partId) {
    var name="";
    $.ajax({
        type: "GET",
        url: uri + "api/part/getspecificname/"+partId,
        cache: false,
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (data) {
            //console.log(data);
            name = data;

        }
    })
    return name;

}