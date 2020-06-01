$(document).ready(function ($) {

    getEnginePart();
});


function getEnginePart() {

    var id = $('#routeDataId').val();

    $("#tableEnginePart").show();

    $.ajax({
        type: "GET",
        url: uri + "api/enginepart/getspecific/" + id,
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
                tr = tr + "<td>" + "PT" + data[i].partId + "</td>";
                var name = getPartName(data[i].partId);
                tr = tr + "<td>" + name + "</td>";
                //tr = tr + "<td>" + data[i].partCount + "</td>";
            }
            $('#tableEnginePart').append(tr);


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