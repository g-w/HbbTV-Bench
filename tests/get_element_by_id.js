test("get_element_by_id", "document.getElementById Performance", function () { 
    var elms = [];
    for(var i = 0; i < 10000; i++) { 
        elms.push(document.getElementById("test-content")); 
    }
}); 