function approve() {

    //approveOrder();
    getOrderPart();
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

function getOrderPart()
{
    $.ajax({
        type: "GET",
        url: uri + "api/orderpart/1015",
        cache: false,
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (data) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                addPart(data[i].partId, data[i].quantity);
            }

        }
    })

}

function addPart(PartId, PartCount) {

    console.log(PartId);
    console.log(PartCount);


}


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