(function () { 
    
    var Runner = window.Runner = function (args) { 
	this.cases = [];

	this.testContentId = args.testContentId || "test-content"; 
	this.results = window.getElementById(args.resultsId || "results"); 
    };

    Object.extend(Runner.prototype, {
	/** 
	 * Sets the runner up.
	 * TODO: comments
	 */
	setup: function (cases) { 
	    for (var i = 0; i < cases.length; ++i) { 
		// check if cases was defined.
		if (window.tests[cases[i] !== undefined]) { 
		    this.cases.push(cases[i]);
		}
		
	    }
	},

	/** 
	 * Runs the test cases given to the setup method.
	 */
	run: function () { 
	    for (var i = 0; i < this.cases; ++i) { 
		var test = new window.tests[this.cases[i]](); 
		test.setup(this.testContentId); 
		if (test.run()) { 
		    this._onSuccess(test.name, test.messages); 
		} else  { 
		    this._onFail(test.name, test.messages); 
		}
		this._writeResult(test); 
	    }
	},

	/**
	 * Callback called on successfull test run
	 *
	 * <String> name: Name of the test case.
	 *
	 * <Array[String]> errors: A possibly empty array of error
	 * messages.
	 */	
	_onFail: function (name, errors) {},

	/**
	 * Callback called on successfull test run
	 *
	 * <String> name: Name of the test case.
	 *
	 * <Array[String]> messages: A possibly empty array of
	 * messages.
	 */	
	_onSuccess: function (name, messages) {},

	/**
	 * TODO
	 */
	_writeResult: function (test) { 
	    
	}
    });

})();