
var socket = io();

let url = "http://192.168.190.160:3000/api/";
let apicall = "server"
// Query the mongodb database.
fetch(url+apicall)
.then(response => response.json())
.then(query => {query.forEach((item, index) => {
        var line = document.createElement('li');
        line.textContent = item.data;
        document.getElementById("chatDisplay").appendChild(line);
    });
});

function sendChat (){
    socket.emit("message", document.getElementById("chatInput").value);
};

socket.on("message", (msg) => {
    var item = document.createElement('li');
    item.textContent = msg;
    document.getElementById("chatDisplay").appendChild(item);
})

