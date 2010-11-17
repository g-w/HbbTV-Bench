(function () { 

    Object.extend = function(destination, source) {
	for ( var property in source) {
	    if (source[property] && source[property].constructor && source[property].constructor === Object) {
		destination[property] = destination[property] || {};
		arguments.callee(destination[property], source[property]);
	    } else {
		destination[property] = source[property];
	    }
	}
	return destination;
    };

    Array.prototype.avg = function () { 
	var sum = 0.0; 
	for (var i = 0; i < this.length; i++) {
	    sum += this[i]; // Assumes that this is of type <Integer[]>
	}
	return sum / this.length;
    }; 

})(); 