test("create_element", "create DOM element and append it to the childList of a node", function () { 

    var elm = document.getElementById("test-content"); 
    elm.innerHTML = "";

    var elms = [];

    for (var i = 0; i < 1000; ++i) { 
        elms.push(document.createElement("div"));
    }

    var appendChild = function (i) { 
        elm.appendChild(elms[i]);
    }

    for (var i = 0; i < 1000; ++i) { 
        appendChild(i); 
    }

}); 