function makePrediction() {
    var setting1 = document.getElementById("setting1").value;
    var setting2 = document.getElementById("setting2").value;
    var setting3 = document.getElementById("setting3").value;
    var s1 = document.getElementById("s1").value;
    var s2 = document.getElementById("s2").value;
    var s3 = document.getElementById("s3").value;
    var s4 = document.getElementById("s4").value;
    var s5 = document.getElementById("s5").value;
    var s6 = document.getElementById("s6").value;
    var s7 = document.getElementById("s7").value;
    var s8 = document.getElementById("s8").value;
    var s9 = document.getElementById("s9").value;
    var s10 = document.getElementById("s10").value;
    var s11 = document.getElementById("s11").value;
    var s12 = document.getElementById("s12").value;
    var s13 = document.getElementById("s13").value;
    var s14 = document.getElementById("s14").value;
    var s15 = document.getElementById("s15").value;
    var s16 = document.getElementById("s16").value;
    var s17 = document.getElementById("s17").value;
    var s18 = document.getElementById("s18").value;
    var s19 = document.getElementById("s19").value;
    var s20 = document.getElementById("s20").value;
    var s21 = document.getElementById("s21").value;



    var url = "http://e1bfa688-0391-4596-89db-95e8d12b8f76.southeastasia.azurecontainer.io/score";

    
    $.ajax({
        type: "GET",
        url: uri + "api/notifications/predict/" + setting1 + "/" + setting2 + "/" + setting3 + "/" + s1 + "/" + s2 + "/" + s3 + "/" + s4 + "/" + s5 +
            "/" + s6 + "/" + s7 + "/" + s8 + "/" + s9 + "/" + s10 + "/" + s11 + "/" + s12 + "/" + s13 + "/" + s14 + "/" + s15 + "/" + s16 + "/" + s17
            + "/" + s18 + "/" + s19 + "/" + s20 + "/" + s21,
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Something went wrong!");
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
        success: function (result) {
            console.log(result);
            init = result.indexOf('[');
            fin = result.indexOf(']');
            var obj = result.substr(init + 1, fin - init - 1);
            console.log(obj);
            document.getElementById("result").innerHTML = obj;
            checkRUL(obj, $('#routeDataId').val());

        }
    });


}