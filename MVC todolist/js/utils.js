UAM.utils = {
  // Inherit prototype functions
	inherits: function (Parent, Child) {
		Child.prototype = Object.create(Parent.prototype);
		Child.prototype.constructor = Child;
	},
	// Get object index in array for given object attribute
	getObjectIndex: function (array, element, nameOfAttr) {
	  var elements = array.map(function(x) {return x[nameOfAttr]; });
	  return elements.indexOf(element);
	},
	// Count object in array with given attribute name equals to value
	getObjectFrequency: function (array, value, nameOfAttr) {
	  var count = 0, elements = array.map(function(x) {return x[nameOfAttr]; });
	  for (i = 0; i < elements.length; i++) {
	    if (elements[i] === value) count++;
	  }
	  return count;
	}
};