var result2 = 0;

$(document).ready(function ($) {


    getPartName();


});



function DeletePart() {
    var str = $('#dropdown').text();
    var res = str.substring(0, 4); //id

    console.log(res);

    if (isNaN(res)) {
        alert("You did not select any engine part!");

    }
    else {
        result2 = 0;
        checkEngine(res);
        checkMaintenance(res);
        checkOrder(res);
        if (result2 == 0) {
            postPart(res);
        }
        else {
            alert("The part is still remain in the system! Please delete all the relevant data first!");
        }
    }

}

function postPart(PartId) {
    $.ajax({
        type: "DELETE",
        url: uri + "api/part/delete/" + PartId,
        contentType: "application/json",
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");

            /*
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
            */
        },
        success: function (result) {
            //alertify.success("New Part is created!");
            // console.log("Good!");
        }
    });
};

function getPartName() {

    var items = "";

    $.ajax({
        type: "GET",
        url: uri + "api/part",
        cache: false,
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                //console.log(data[i].partName);
                items += "<li class='dropdown-item'><a >" + data[i].partId + " " + data[i].partName + "</a ></li>";
                //console.log(items);

            }
            $('#SelectPartName').html(items);


            setDropdown();

        }
    })
};


function setDropdown() {
    $(".dropdown-menu li a").click(function (e) {
        var selText = $(this).text();
        $(this).parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
        var str = selText;
        var res = str.substring(0, 4);
        //console.log(res);
    });
}

function checkEngine(PartId) {
    $.ajax({
        type: "GET",
        url: uri + "api/enginepart/getspecificcount/" + PartId,
        contentType: "application/json",
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");

            /*
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
            */
        },
        success: function (result) {
            result2 += result;
            //alertify.success("New Part is created!");
            // console.log("Good!");
        }
    });
};

function checkMaintenance(PartId) {
    $.ajax({
        type: "GET",
        url: uri + "api/maintenancepart/getspecificcount/" + PartId,
        contentType: "application/json",
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");

            /*
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
            */
        },
        success: function (result) {
            result2 += result;
            //alertify.success("New Part is created!");
            // console.log("Good!");
        }
    });
};

function checkOrder(PartId) {
    $.ajax({
        type: "GET",
        url: uri + "api/orderpart/getspecificcount/" + PartId,
        contentType: "application/json",
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");

            /*
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
            */
        },
        success: function (result) {
            result2 += result;
            //alertify.success("New Part is created!");
            // console.log("Good!");
        }
    });
};