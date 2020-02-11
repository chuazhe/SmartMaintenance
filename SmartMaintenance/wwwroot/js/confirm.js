function Test() {
    console.log("test");
    //console.log(document.getElementById("orderComment").value);
    alertify.error('Error message');


}


function approveOrder() {
    $.ajax({
        type: "PUT",
        url: uri + "api/order/approve/" + $('#routeDataId').val(),
        cache: false,
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);

        },
        error: function (data) {
            alert(data.responseText);
        }, //End of AJAX error function  
        success: function (data) {
            console.log(data);

        }
    })
};


function declineOrder() {
    $.ajax({
        type: "GET",
        url: uri + "api/aircraft",
        cache: false,
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (data) {
            console.log(data);


        }
    })
};