/*  
injex.js
*/
"use strict"

// new object ...
var results = [{
    name: "Jquery",
    language: "JavaScript",
    score: 4.5,
    showLog: function () {
    },
    owner: {
        login: "shawnw",
        id: 123456
    }
}, 
{
    name: "Jquery UI",
    language: "JavaScript",
    score: 3.5,
    showLog: function () {
    },
    owner: {
        login: "shawnX",
        id: 123456
    }
}];

console.log(results.length);
console.log(results[0]);

for (var x = 0; x < results.length; x++) {
    var result = results[x];
    console.log(result.name);
}



/*

var none;
if (none == undefined) {
    console.log("none is undefined");
}

var aNumber = 10;
if (aNumber == "10") {
    console.log("aNumber == 10");
}
if (aNumber === "10") {
    console.log("anumber === 10");
}


showMsg("hello");

function showMsg(msg, more) {
    if (more) {
        console.log("showMsg+ " + msg + more);
    } else {
        console.log("showMsg+ " + msg);
    }
}


var showIt = function (msg) {
    console.log(msg);
}

showIt("Some message");


function showItThen(msg, callback) {
    showIt(msg);
    if (callback) {
        callback();
    }
}

showItThen("showItThen called1", function () {
    console.log("callback called");
});

showItThen("showItThen called2", function () {
    console.log("callback2 called");
});

showItThen("showItThen called 3", showItThen("showItThen called 4", 0));

console.log(window);
*/