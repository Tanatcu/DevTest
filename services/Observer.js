var Observer = function () {
	this.observers = [];
};

/**
 * Add observer to observers array
 * @param {function} observer - callback
 */
Observer.prototype.add = function (observer) {
	if (typeof observer !== 'function') {
		throw new Error('observer must be a function')
	}

	for (var i = 0; i < this.observers.length; i += 1) {
		if (this.observers[i] === observer) {
			throw new Error('observer already exist');
		}
	}

	this.observers.push(observer);
};

/**
 * Remove observer from observers array
 * @param {function} observer - callback
 */
Observer.prototype.remove = function (observer) {
	for (var i = 0; i < this.observers.length; i++) {
		if (this.observers[i] === observer) {
			this.observers.splice(i, 1);
			return;
		}
	}

	throw new Error('could not find observer in list of observers');
};

/**
 * Triggering all observers in array
 * @param {object|empty} data - that pass to call params
 */
Observer.prototype.notify = function (data) {
	var observersSnapshot = this.observers.slice(0);
	for (var i = 0; i < observersSnapshot.length; i++) {
		observersSnapshot[i](data);
	}
};
