test("dummy", "A simple dummy test", function () { 
    var val = 0; 
    for (var j = 0; j < 100; ++j) {
	for (var i = 0; i < j * 1000; ++i) {
	    val += i; 
	}
	for (var i = 0; i < j * 1000; ++i) {
	    val -= i; 
	}
    }
}); 