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

    postPart(txt, quantity);


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