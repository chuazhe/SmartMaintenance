"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();

//Disable send button until connection is established
document.getElementById("sendButton").disabled = true;
document.getElementById("sendButton2").disabled = true;


//Receive Message
connection.on("ReceiveMessage", function (user, message) {
    var msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    //var encodedMsg = user + " says " + msg;
    var encodedMsg = msg;
    var li = document.createElement("li");
    //Add Content
    li.textContent = encodedMsg;
    //Add Class Name
    li.className += "list-group-item";
    document.getElementById("messagesList").appendChild(li);
});

connection.start().then(function () {
    document.getElementById("sendButton").disabled = false;
    document.getElementById("sendButton2").disabled = false;
}).catch(function (err) {
    return console.error(err.toString());
});

//send Message
document.getElementById("sendButton").addEventListener("click", function (event) {
    var user = document.getElementById("userInput").value;
    var message = document.getElementById("messageInput").value;
    connection.invoke("Add", message).catch(function (err) {
        return console.error(err.toString());
    });
    connection.invoke("SendMessage", user, message).catch(function (err) {
        return console.error(err.toString());
    });
    //If this method is called, the default action of the event will not be triggered.
    event.preventDefault();

});

//send Message
document.getElementById("sendButton2").addEventListener("click", function (event) {
    var message = document.getElementById("messageInput").value;
    //SignalR real time
    connection.invoke("SendMessageToGroup", "PrivateGroup", message).catch(function (err) {
        console.log("fail send");
        return console.error(err.toString());
    });
    console.log("done send");
    //If this method is called, the default action of the event will not be triggered.
    event.preventDefault();
});

//Join Group
document.getElementById("joinGroup").addEventListener("click", function (event) {
    connection.invoke("JoinGroup", "PrivateGroup").catch(function (err) {
        console.log("fail join group");
        return console.error(err.toString());
    });
    console.log("done join group");
    //If this method is called, the default action of the event will not be triggered.
    event.preventDefault();
});