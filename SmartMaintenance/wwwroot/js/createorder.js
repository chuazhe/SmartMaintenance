$(document).ready(function ($) {

    getPartName();
});

function Test() {
    console.log($("#SelectPartName").val());
}

function getPartName() {

    var items="";

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
            for (var i = 0; i < data.length; i++) {
                //console.log(data[i].partName);
                items += "<li class='dropdown-item'><a >"+ data[i].partName +"</a ></li>";  
                //console.log(items);

            }
            $('#SelectPartName').html(items);
            $('#SelectPartName2').html(items);

            setDropdown();          

        }
    })
};
