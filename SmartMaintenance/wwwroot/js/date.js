$(function () {
    $("#datepicker").datepicker({
        autoclose: true,
        todayHighlight: true
    }).datepicker('update', new Date());
});

function showDate() {
    console.log($("#datepicker").val()); //2014-4-15
}