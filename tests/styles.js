test("styles", "add/rm class,  add/rm style Performance", function () { 
    var testContent = document.getElementById("test-content"); 
    testContent.innerHTML = "<div id='style-test-content' style='height: 10px; width: 10px;'></div>";
    var div = document.getElementById("style-test-content"); 

    // Set class without layout impact
    var setClass = function () { 
        div.className = "foo-" + i.toString();  
    };
    
    var rmClass = function () { 
        div.className = ""; 
    }

    for (var i = 0; i < 1000; ++i) {
        setClass();
        rmClass();
    }

    // Set class with layout impact
    setClass = function () { 
        div.className = "yellowTest"; 
    }
    for (var i = 0; i < 1000; ++i) { 
        setClass(); 
        rmClass();
    }

    // Styles directly
    var setStyle = function (prop, val) { 
        div.style[prop] = val; 
    }

    for (var i = 0; i < 1000; ++i) { 
        setStyle("background-color", "red");
        setStyle("height", "15px"); 
        setStyle("background-color", "green");
        setStyle("height", "10px"); 
    }

}); 