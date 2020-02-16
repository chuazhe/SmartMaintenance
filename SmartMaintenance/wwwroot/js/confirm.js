function approve() {

    approveOrder();
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
    var id = $('#routeDataId').val();

    $.ajax({
        type: "GET",
        url: uri + "api/orderpart/getspecific/"+id,
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
            for (var i = 0; i < data.length; i++) {
                addPart(data[i].partId, data[i].quantity);
            }

        }
    })

}

function addPart(PartId, PartCount) {
    $.ajax({
        type: "PUT",
        url: uri + "api/part/add/" + PartId + "/" + PartCount,
        cache: false,
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (data) {

        }
    })


}


function declineOrder() {
    alertify.error("Error");
    /*
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
    */
};