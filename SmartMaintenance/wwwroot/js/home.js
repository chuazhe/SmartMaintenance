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
const uri = "https://localhost:44376/";
// Local Host for Application
//const uri = "https://localhost:44393/";

let todos = null;

$(document).ready(function () {
    getData();
    //postData();
    //getDataById(13);
});


function getData() {
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
                console.log(key);
                console.log(item);
                todos = data;
            });
        }
    })
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
