function Container() {

	this.shapesName = {
		3: 'getTriangle',
		4: 'getSquare',
		5: 'getPentagon',
		6: 'getHexagon',
		7: 'getCircle',
		8: 'getEllipse'
	};

	this.model = SingleModel.get();

	this.renderer = PIXI.autoDetectRenderer(700, 500, {
		view: document.getElementById('context'),
		backgroundColor: 0xFFFFFF
	});

	this.container = new PIXI.Container();
	this.shape = new Shape();

	var ticker = new PIXI.ticker.Ticker(), that = this;

	ticker.add(function () {
		that.renderer.render(that.container)
	});

	ticker.start();
}

Container.prototype.getRandom = function () {
	return parseInt(Math.random() * (9 - 3) + 3)
};

Container.prototype.addShape = function (shape) {
	this.container.addChild(shape);
	this.model.increaseCount();
};

Container.prototype.removeShape = function (shape) {
	this.container.removeChild(shape);
};

Container.prototype.getRandomShape = function () {
	this.addShape(this.shape[this.shapesName[this.getRandom()]]());
};

Container.prototype.interval = function (t) {
	var interval = 1000 / t,
			bindFn = this.getRandomShape.bind(this);

	return setInterval(bindFn, interval)
};

var SinglePixi = (function () {
	var instance;

	return {
		getInstance: function () {
			if (!instance) {
				instance = new Container();
			}

			return instance;
		}
	}
})();