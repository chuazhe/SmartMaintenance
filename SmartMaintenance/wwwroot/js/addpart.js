var result2 = 0;

$(document).ready(function ($) {

    $('#add').click(function (e) {

        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());

        $('#quantity').val(quantity + 1);

    });

    $('#minus').click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());

        if (quantity > 0) {
            $('#quantity').val(quantity - 1);
        }
    });
});

function AddPart() {
    var txt = $("#partName").val();
    var quantity = $('#quantity').val();

    if (quantity != 0 && !isEmptyOrSpaces(txt)) {
        checkName(txt);
        if (result2 == 0) {
            postPart(txt, quantity);
        }
        else {
            alert("Please enter another name for the part!");

        }
    }
    else {
        alert("Please enter the name and quantity for the part!");
    }

}


function postPart(PartName, Count) {
    $.ajax({
        type: "POST",
        url: uri + "api/part/create",
        contentType: "application/json",
        async: false,
        data: JSON.stringify({ "PartName": PartName, "PartCount": Count }),
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");

            /*
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
            */
        },
        success: function (result) {
            alertify.success("New Part is created!");
            // console.log("Good!");
        }
    });
};

function checkName(PartName) {
    $.ajax({
        type: "GET",
        url: uri + "api/part/getspecificpartname/"+PartName,
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
            result2 = result;
            //alertify.success("New Part is created!");
            // console.log("Good!");
        }
    });
};