(function (global) {
	var EE;

	if (!global.UAM) {
		global.UAM = {};
	}

	EE = function () {
		//store the listeners somewhere
		this.listeners = {};
	};

	EE.prototype.on = function (eventName, listener, context) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }
        var table = this.listeners[eventName];
        var binded = listener.bind(context);
        table.push(binded);

        return function () {
            var index = table.indexOf(binded);
            if (index > -1) {
                table.splice(index, 1);
            }
        };
	};

	EE.prototype.emit = function (eventName /*, other args...*/) {
        var args = [];
        for (var i = 1; i < arguments.length; i++) {
            args.push(arguments[i]);
        }

        for(var i in this.listeners[eventName]) {
            this.listeners[eventName][i].apply(this, args);
        }
	};

//	var ee = new EE();
//
//	var removeListener = ee.on('test', function (arg1, arg2) {
//		console.log(arg1, arg2, this.key);
//	}, { key: 'value' });
//
//	ee.emit('test', 1, 2); // 1, 2 value
//
//	removeListener(); //removes my listener from the event emitter;
//
//	ee.emit('test'); //nothing will execute

	global.UAM.EventEmitter = EE;

}(window));
