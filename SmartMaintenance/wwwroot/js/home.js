// Cloud Webiste for Web Api
//const uri = "https://myindustry4irwebapi.azurewebsites.net/";
//Local Host for Web Api
//const uri = "http://localhost:4000/";
// Local Host for Application
//const uri = "https://localhost:44393/";

let todos = null;
var value = null;
var service = 0;
var maintenance = 0;
var approved = 0;
var unapproved = 0;
var done = 0;
var notdone = 0;

$(document).ready(function () {
    //value = $("#JWT").data('value');
    //console.log(value);
    getAircraftCount();
    getAircraftMaintenanceCount();
    getMaintenancePlanCount();
    getOrderCount();
    getApproved();
    getUnApproved();
    getDone();
    getUndone();
    setChart();
    setChart2();
    setChart3();
});

function setChart() {
    var ctx = document.getElementById('myChart').getContext('2d');

    data = {
        datasets: [{
            data: [service, maintenance],
            backgroundColor: [
                'rgb(0, 64, 255, 0.5)',
                'rgba(255, 0, 0, 0.5)'
            ]

        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'In Service',
            'In Maintenance',
        ]
    };

    var options = {

    };

    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: options

    });
}

function setChart2() {
    var ctx2 = document.getElementById('myChart2').getContext('2d');

    data = {
        datasets: [{
            data: [approved, unapproved],
            backgroundColor: [
                'rgba(253,180,92, 0.5)',
                'rgba(70,191,189, 0.5)'
            ]

        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Approved Purchase Order',
            'Unapproved Purchase Order',
        ]
    };

    var options = {

    };

    var myPieChart2 = new Chart(ctx2, {
        type: 'pie',
        data: data,
        options: options

    });

}

function setChart3() {
    var ctx2 = document.getElementById('myChart3').getContext('2d');

    data = {
        datasets: [{
            data: [done, undone],
            backgroundColor: [
                'rgba(142,68,173, 0.5)',
                'rgba(88,214,141, 0.5)'
            ]

        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Finished Maintenance Plan',
            'Unfinished Maintenance Plan',
        ]
    };

    var options = {

    };

    var myPieChart2 = new Chart(ctx2, {
        type: 'pie',
        data: data,
        options: options

    });

}

function getAircraftCount() {
    $.ajax({
        type: "GET",
        url: uri + "api/aircraft",
        cache: false,
        async: false,
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
            service = j;
            document.getElementById("AircraftCount").innerHTML = j;


        }
    })
};

function getApproved() {
    $.ajax({
        type: "GET",
        url: uri + "api/order/getapproved",
        cache: false,
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (data) {

            var j = 0;

            for (var i = 0; i < data.length; i++) {
                j++;

            }
            approved = j;


        }
    })
};

function getUnApproved() {
    $.ajax({
        type: "GET",
        url: uri + "api/order/getunapproved",
        cache: false,
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (data) {

            var j = 0;

            for (var i = 0; i < data.length; i++) {
                j++;

            }
            unapproved = j;


        }
    })
};

function getUndone() {
    $.ajax({
        type: "GET",
        url: uri + "api/maintenance/getundone",
        cache: false,
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (data) {

            var j = 0;

            for (var i = 0; i < data.length; i++) {
                j++;

            }
            undone = j;


        }
    })
};

function getDone() {
    $.ajax({
        type: "GET",
        url: uri + "api/maintenance/getdone",
        cache: false,
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (data) {

            var j = 0;

            for (var i = 0; i < data.length; i++) {
                j++;

            }
            done = j;


        }
    })
};

function getAircraftMaintenanceCount() {
    $.ajax({
        type: "GET",
        url: uri + "api/aircraft",
        cache: false,
        async: false,
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
            maintenance = j;
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

//with JWT authorise header
/*
function getDataWithToken() {
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
*/
