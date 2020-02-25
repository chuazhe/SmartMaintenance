$(document).ready(function ($) {

    getPartName();

    $('#add').click(function (e) {

        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());

        // If is not undefined

        $('#quantity').val(quantity + 1);


        // Increment

    });

    $('#minus').click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());

        // If is not undefined

        // Increment
        if (quantity > 0) {
            $('#quantity').val(quantity - 1);
        }
    });

    $('#addSecond').click(function (e) {

        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity2').val());

        // If is not undefined

        $('#quantity2').val(quantity + 1);


        // Increment

    });

    $('#minusSecond').click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity2').val());

        // If is not undefined

        // Increment
        if (quantity > 0) {
            $('#quantity2').val(quantity - 1);
        }
    });

    $('#addThird').click(function (e) {

        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity3').val());

        // If is not undefined

        $('#quantity3').val(quantity + 1);


        // Increment

    });

    $('#minusThird').click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity3').val());

        // If is not undefined

        // Increment
        if (quantity > 0) {
            $('#quantity3').val(quantity - 1);
        }
    });

    $('#addFourth').click(function (e) {

        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity4').val());

        // If is not undefined

        $('#quantity4').val(quantity + 1);


        // Increment

    });

    $('#minusFourth').click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity4').val());

        // If is not undefined

        // Increment
        if (quantity > 0) {
            $('#quantity4').val(quantity - 1);
        }
    });



    /*
    setPartA();
    setPartB();
    setPartC();
    setPartD();


    var str6 = $('#dropdown').text();
    console.log(str6);

    var str7 = $('#dropdown2').text();
    console.log(str7);

    var str8 = $('#dropdown3').text();
    console.log(str8);

    var str9 = $('#dropdown4').text();
    console.log(str9);
    */



});

function createPurchaseOrder() {

    var str = $('#dropdown').text();
    var res = str.substring(0, 4);
    if (isNaN(res)) {
        res = null;
    } 

    var str2 = $('#dropdown2').text();
    var res2 = str2.substring(0, 4);
    if (isNaN(res2)) {
        res2 = null;
    } 

    var str3 = $('#dropdown3').text();
    var res3 = str3.substring(0, 4);
    if (isNaN(res3)) {
        res3 = null;
    } 

    var str4 = $('#dropdown4').text();
    var res4 = str4.substring(0, 4);
    if (isNaN(res3)) {
        res3 = null;
    } 

    var quantity = $('#quantity').val();

    var quantity2 = $('#quantity2').val();

    var quantity3 = $('#quantity3').val();

    var quantity4 = $('#quantity4').val();


    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '-' + mm + '-' + yyyy;

    postOrder(today);

    var Id = getTopId();
    postOrderPart(Id, res, quantity);
    postOrderPart(Id, res2, quantity2);
    postOrderPart(Id, res3, quantity3);
    postOrderPart(Id, res4, quantity4);

    alertManager(Id);




}

function postOrder(today) {
    $.ajax({
        type: "POST",
        url: uri + "api/order/create",
        contentType: "application/json",
        async: false,
        data: JSON.stringify({"OrderDate":today,"OrderApprove":"0"}),
        error: function (jqXHR, textStatus, errorThrown) {
        },
        success: function (result) {
            alertify.success("Purchase Order is created!");
        }
    });
};

function getTopId() {
    var topId = 0;
    $.ajax({
        type: "GET",
        url: uri + "api/order/gettop",
        cache: false,
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (data) {
            topId = data;
        }
    });

    return topId;

};

function postOrderPart(OrderId,PartId,Count) {
    $.ajax({
        type: "POST",
        url: uri + "api/orderpart/create",
        contentType: "application/json",
        async: false,
        data: JSON.stringify({ "OrderId": OrderId, "PartId": PartId, "Quantity": Count }),
        error: function (jqXHR, textStatus, errorThrown) {
        },
        success: function (result) {
        }
    });
};



function getPartName() {

    var items="";

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
                items += "<li class='dropdown-item'><a >"+ data[i].partId +" "+data[i].partName+"</a ></li>";  
                //console.log(items);

            }
            $('#SelectPartName').html(items);
            $('#SelectPartName2').html(items);
            $('#SelectPartName3').html(items);
            $('#SelectPartName4').html(items);



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
        console.log(res);
    });
}

function setPartA() {
    var selText = "1001 Alpha";
     $("#SelectPartName.dropdown-menu li a").parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
        var str = selText;
        var res = str.substring(0, 4);
        console.log(res);
}

function setPartB() {
    var selText = "1002 Beta";
    $("#SelectPartName2.dropdown-menu li a").parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
    var str = selText;
    var res = str.substring(0, 4);
    console.log(res);
}

function setPartC() {
    var selText = "1003 Gamma";
    $("#SelectPartName3.dropdown-menu li a").parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
    var str = selText;
    var res = str.substring(0, 4);
    console.log(res);
}

function setPartD() {
    var selText = "1004 Delta";
    $("#SelectPartName4.dropdown-menu li a").parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
    var str = selText;
    var res = str.substring(0, 4);
    console.log(res);
}

function alertManager(Id) {

    var msg = "Purchase Order " + Id + " is created!";
    sendNotification(msg, 1);
    //alertify.message(msg);
}