//Local Host for Web Api

$(document).ready(function ($) {

    getPart();

});

function getPart() {

    $("#tablePart").show();

    $.ajax({
        type: "GET",
        url: uri + "api/part",
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
                tr = tr + "<tr class=table-row data-href=" + web + "part/details/" + data[i].partId + ">";
                tr = tr + "<td>" + data[i].partId + "</td>";
                tr = tr + "<td>" + data[i].partName + "</td>";
                tr = tr + "<td>" + data[i].partCount + "</td>";

            }
            $('#tablePart').append(tr);
            TableClickable();

            /*
            $.each(data, function (key, item) {
                //console.log(key);
                //console.log(item);

            });*/

        }
    })
};
