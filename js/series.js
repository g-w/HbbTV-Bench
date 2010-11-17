(function () { 
    
    var TestSeries = window.TestSeries = function (testCase) { 

	this._testCase = testCase; 
		
	this._maxValue = undefined;
	this._minValue = undefined; 

	this.results = []; 
    }; 

    Object.extend(TestSeries.prototype, {
	run: function (c, callback) { 
	    var that = this;
	    var count = c; 

	    var sample = function () { 
		if (that._testCase.start()) {
		    var result = that._testCase.result(); 
		    that.results.push(result);
		    that._updateMax(result); 
		    that._updateMin(result); 
		} else { 
		    this._errorCount += 1;
		}
		
		count--; 
		if(count >= 0) { 
		    setTimeout(sample, 1); 
		} else { 
		    setTimeout(callback, 1); 
		}
	    };
	    
	    sample();
	}, 

	max: function () { 
	    return this._maxValue; 
	}, 

	min: function () { 
	    return this._minValue; 
	}, 

	avg: function () { 
	    return this.results.avg();
	},
	
	_updateMax: function (result) { 
	    this._maxValue = (this._maxValue === undefined || result > this._maxValue) ? result : this._maxValue; 
	}, 

	_updateMin: function (result) { 
	    this._minValue = (this._minValue === undefined || result < this._minValue) ? result : this._minValue;
	}
    })
    
})(); 