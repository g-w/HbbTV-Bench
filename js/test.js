(function () { 
    
    // create tests namespace
    window.tests = {};

    // DSL for creating tests;
    window.test = function (name, description, fn) { 
	fn.name = name; 
	fn.description = description; 
	tests[name] = fn; 
    }

    var TestCase = window.TestCase = function (fn) {
	this._fn = fn; 
    };

    Object.extend(TestCase, {
	create: function (name) { 
	    var test = window.tests[name]; 
	    if (test !== undefined && typeof test == "function") { 
		return new TestCase(test); 
	    }
	    return null;
	}
    });

    Object.extend(TestCase.prototype, {

	name: function () { 
	    return this._fn.name;
	},
	
	description: function () { 
	    return this._fn.description;
	},

	start: function () { 
	    this.startedAt = new Date();
	    var val = (this._fn() === false) ? false : true; 
	    this.endedAt = new Date();
	    return val; 
	},

	result: function () { 
	    return this.endedAt.valueOf() - this.startedAt.valueOf();
	}
	
    });

})(); 