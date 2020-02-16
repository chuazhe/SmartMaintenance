//form encoded data
/*
var dataType = 'application/x-www-form-urlencoded; charset=utf-8';
var data = $('form').serialize();
*/

/*
console.log('Submitting form...');
$.ajax({
    type: 'POST',
    url: 'https://myindustry4irwebapi.azurewebsites.net/api/testtable',
    dataType: 'json',
    contentType: dataType,
    data: data,

    success: function (result) {
        console.log('Data received: ');
        console.log(result);
    }
});
*/

// Cloud Webiste for Web Api
//const uri = "https://myindustry4irwebapi.azurewebsites.net/";
//Local Host for Web Api
//const uri = "http://localhost:4000/";
// Local Host for Application
//const uri = "https://localhost:44393/";

let todos = null;
var value =null;

$(document).ready(function () {
    value = $("#JWT").data('value');
    console.log(value);
    getAircraftCount();
    getAircraftMaintenanceCount();
    getMaintenancePlanCount();
    getOrderCount();
    //getData2();
    //sendNotification();
    //alert("hello");
    //getData();
    //postData();
    //getDataById(13);
});

function getAircraftCount() {
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

            var j = 0;

            for (var i = 0; i < data.length; i++) {
                if (data[i].aircraftStatus == 1) {
                    j++;
                }


            }
            document.getElementById("AircraftCount").innerHTML = j;


        }
    })
};

function getAircraftMaintenanceCount() {
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
            var j = 0;
            

            for (var i = 0; i < data.length; i++) {
                if (data[i].aircraftStatus == 0) {
                    j++;
                }

            }
            document.getElementById("AircraftMaintenanceCount").innerHTML = j;


        }
    })
};

function getMaintenancePlanCount() {
    $.ajax({
        type: "GET",
        url: uri + "api/Maintenance",
        cache: false,
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (data) {
            document.getElementById("PlanCount").innerHTML = data.length;

        }
    })
};

function getOrderCount() {
    var i = 0;
    $.ajax({
        type: "GET",
        url: uri + "api/order",
        cache: false,
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (data) {
            document.getElementById("OrderCount").innerHTML = data.length;


        }
    })
};



function getData() {

    var i = 0;

    $.ajax({
        type: "GET",
        url: uri +"api/testtable",
        cache: false,
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (data) {
            $.each(data, function (key, item) {
                i++;

            });
            console.log(i);
        }
    });
};

function postData() {
    $.ajax({
        type: "POST",
        url: uri + "api/testtable",
        contentType: "application/json",
        data: JSON.stringify({"id" : 13, "name" :"Lt"}),
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");
            console.log(jqXHR); 
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (result) {
            console.log("Good!");
        }
    });
};

function sendNotification() {
    var x = document.getElementById("msg").value;
    console.log(x);

    $.ajax({
        type: "POST",
        url: uri + "api/notifications/sendnoti",
        contentType: "application/json",
        data: JSON.stringify({ "msg": x}),
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (result) {
            console.log("Good!");
            console.log(result);
        }
    });
};

//with authotise header
function getData2() {
    $.ajax({
        type: "GET",
        url: uri + "api/values",
        contentType: "application/json",
        headers: {
            'Authorization': "Bearer "+value
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (result) {
            console.log(result);
        }
    });
};


function getDataById(id) {
    $.ajax({
        type: "GET",
        url: uri + "api/testtable/"+id,
        contentType: "application/json",
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (data) {
            $.each(data, function (key, item) {
                console.log(key);
                console.log(item);
                todos = data;
            });
        }
    });
};
