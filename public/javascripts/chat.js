var socket = io();

function sendChat (){
    socket.emit("message", document.getElementById("chatInput").value);
};

socket.on("message", (msg) => {
    var item = document.createElement('li');
    item.textContent = msg;
    document.getElementById("chatDisplay").appendChild(item);
})