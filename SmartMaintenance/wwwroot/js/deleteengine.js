$(document).ready(function ($) {

    getEnginePart();

});


function postEnginePart() {

    var id = $('#routeDataId').val();

    var str = $('#dropdown').text();
    var res = str.substring(0, 4); //id

    $.ajax({
        type: "POST",
        url: uri + "api/enginepart/delete",
        contentType: "application/json",
        async: false,
        data: JSON.stringify({ "EngineId": id, "PartId": res }),
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (result) {
            //console.log("Good!");
        }
    });
};

function getEnginePart() {

    var items = "";
    var id = $('#routeDataId').val();

    //console.log(id);

    $.ajax({
        type: "GET",
        url: uri + "api/enginepart/getspecific/"+id,
        cache: false,
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                //console.log(data[i].partName);
                var name = getPartName(data[i].partId);
                items += "<li class='dropdown-item'><a >" + data[i].partId + " " + name + "</a ></li>";
                //console.log(items);

            }
            $('#SelectPartName').html(items);

            setDropdown();

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


function setDropdown() {
    $(".dropdown-menu li a").click(function (e) {
        var selText = $(this).text();
        $(this).parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
        var str = selText;
        var res = str.substring(0, 4);
        //console.log(res);
    });
}