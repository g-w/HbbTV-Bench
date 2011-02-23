(function () { 
    
    var TestRunner = window.TestRunner = function (args) { 
	var args = args || {};

	this.cases = [];

	this.testContentId = args.testContentId || "test-content"; 
	this.results = document.getElementById(args.resultsId || "results"); 
    };

    Object.extend(TestRunner.prototype, {
	/** 
	 * Sets the runner up.
	 * TODO: comments
	 */
	setup: function () { 
	    for (var i = 0; i < arguments.length; ++i) { 
		var test = TestCase.create(arguments[i]); 
		if (test !== null) { 
		    this.cases.push(test); 
		}
	    }
	},

	/** 
	 * Runs the test cases given to the setup method.
         */
        run: function () { 
            var that = this; 
            var i = 0;

            var runner = function () { 
                if (i < that.cases.length) { 
                    var testSeries = new TestSeries(that.cases[i]); 
                    testSeries.run(10, function () { 
                        that._writeResult(i, testSeries); 

                        // run the next test case.
                        i++;
                        setTimeout(runner, 1); 
                    });
                }
            }; 

            runner();
        },

        /**
         * TODO
         */
        _writeResult: function (i, testSeries) {
            var cls = (i % 2 == 1) ? "odd" : "even"; 
            var html = "<tr class='" + cls + "' ><td>" + i.toString() + "</td><td>" + testSeries.testCase().description() + "</td><td>" + testSeries.runs() + "</td><td>" + formatAvg(testSeries.avg()) + " / " +  testSeries.min() + " / " + testSeries.max() + "</td></tr>";
            this.results.innerHTML += html;       
	}
    });

    function formatAvg(avg) { 
        var parts = avg.toString().split("."); 
        return parts[0] + (parts.length > 1 ? "." + parts[1].slice(0, 3) : "");
    }

})();