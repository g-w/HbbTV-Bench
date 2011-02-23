test("arithmetic", "Arithmetic Performance", function () { 
    var val; 
    for (var j = 0; j < 100; ++j) {
        val = 0; 
	for (var i = 0; i < j * 100; ++i) {
	    val += i; 
	}
        val = 0; 
	for (var i = 0; i < j * 100; ++i) {
	    val -= i; 
	}
        val = 0; 
	for (var i = 0; i < j * 100; ++i) {
	    val *= i; 
	}
        val = 0; 
	for (var i = 1; i < j * 100; ++i) {
	    val /= i; 
	}
    }
}); 