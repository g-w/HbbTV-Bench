test("inner_html", "elm.innerHTML Performance", function () { 
    var elm = document.getElementById("test-content"); 
    elm.innerHTML = "";

    var setInnerHtml = function (str) { 
        elm.innerHTML = str;
    }; 

    for (var i = 0; i < 250; ++i) { 
        setInnerHtml("<div><div><div><div><div><div></div></div></div></div></div></div>");
        setInnerHtml(""); 
    }
}); 