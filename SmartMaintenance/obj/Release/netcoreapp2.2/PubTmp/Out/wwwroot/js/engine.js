$(document).ready(function ($) {

    getEngine();

});

function getEngine() {

    $("#tableEngine").show();

    $.ajax({
        type: "GET",
        url: uri + "api/engine",
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
                tr = tr + "<tr class=table-row data-href=" + web + "engine/details/" + data[i].engineId + ">";
                tr = tr + "<td>" + "EG" + data[i].engineId + "</td>";
                tr = tr + "<td>" + data[i].engineName + "</td>";

            }
            $('#tableEngine').append(tr);
            TableClickable();

            /*
            $.each(data, function (key, item) {
                //console.log(key);
                //console.log(item);

            });
            */

        }
    })
};
