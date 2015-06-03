(function(window) {

	var Utilities = function() {
		
		this.ajax = {};
	};
	
	/* 
	Simple each (replicates jQuery(sel).each())	
	Usage: u.each(selector, function(element, index) { var element=element, index=index})
	*/
	Utilities.prototype.each = function(qs, callback) {
		
		Array.prototype.forEach.call(qs, function(el, index) {
			
			callback.call(this, el, index)
		})
	};
	
	/*
	Simple Get
	Usage: u.get('/my/url', function(data) {
		var data = data;
	})
	*/
	Utilities.prototype.get = function(url, successCallback, errorCallback) {
		
		var r = new XMLHttpRequest();
		
		r.open('GET', url, true);
		
		r.onreadystatechange = function() {
			

		  if (this.readyState === 4) {
			
				successCallback.call(this, r)
			}
		}
		
		r.onerror = function() {
			
			errorCallback.call(this, new Error("Unsuccessful connection"))
		}
		
		r.send();
		
		r = null;
	}
	
	/*
	Simple post 
	Usage: u.post('/my/url/', {'some': data})
	*/
	Utilities.prototype.post = function(url, data) {
		
		var r = new XMLHttpRequest();
		
		r.open('POST', url, true);
		
		r.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
		
		r.send(data);
	}
	
	/*
	Merge two objects. Second object is merged into first.
	Usage: var settings = u.extend(defaults, options, false)
	^ This will create a settings a object which overrides a defaults hash with settings specified in the instance
	(e.g. var widget = new Widget({isCool: false})) overrides defaults.isCool = true
		
	(H/T: http://youmightnotneedjquery.com/)
	*/
	
	Utilities.prototype.extend = function(objA, objB, isDeep) {
		
		var isDeep = isDeep || false;
		
		if (isDeep) return deepExtend({}, objA, objB)
			
			else return shallowExtend({}, objA, objB);
		
		function deepExtend(out) {
			
		  out = out || {};

		  for (var i = 1; i < arguments.length; i++) {
		    var obj = arguments[i];

		    if (!obj)
		      continue;

		    for (var key in obj) {
		      if (obj.hasOwnProperty(key)) {
		        if (typeof obj[key] === 'object')
		          deepExtend(out[key], obj[key]);
		        else
		          out[key] = obj[key];
		      }
		    }
		  }

		  return out;
		}
		
		function shallowExtend(out) {
		  out = out || {};

		  for (var i = 1; i < arguments.length; i++) {
		    if (!arguments[i])
		      continue;

		    for (var key in arguments[i]) {
		      if (arguments[i].hasOwnProperty(key))
		        out[key] = arguments[i][key];
		    }
		  }

		  return out;
		}
	}
	
	window.Utilities = Utilities;
	
})(window);