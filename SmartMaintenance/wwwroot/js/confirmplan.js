$(document).ready(function ($) {

    getMaintenancePart();
});

function done() {
    usedMaintenance();
    minusMaintenance();
}

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
            }
            $('#tableMaintenancePart').append(tr);


        }
    })
};

function minusMaintenance() {

    var id = $('#routeDataId').val();

    $.ajax({
        type: "GET",
        url: uri + "api/maintenancepart/getspecific/" + id,
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
            var tr;
            for (var i = 0; i < data.length; i++) {
                minusPart(data[i].partId, data[i].partCount);
            }


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
            //console.log(data);
            name = data;

        }
    })
    return name;

}

function minusPart(PartId, PartCount) {
    $.ajax({
        type: "PUT",
        url: uri + "api/part/minus/" + PartId + "/" + PartCount,
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

function usedMaintenance() {
    var id = $('#routeDataId').val();

    $.ajax({
        type: "PUT",
        url: uri + "api/maintenance/usedmaintenance/" + id,
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