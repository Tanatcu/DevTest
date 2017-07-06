function Shape() {
	this.startY = -100;
	this.finishY = 700;

	this.model = SingleModel.get();

	this.loop = function (ticker, graphics) {
		graphics.y += this.model.getGravity();

		if (graphics.y > this.finishY) {
			ticker.stop();
			graphics.destroy();
			this.model.decreaseCount();
		}
	}
}

Shape.prototype.getRandomColor = function () {
	return '0x' + parseInt(Math.random() * 999999)
};

Shape.prototype.getRandomX = function () {
	return Math.random() * (650 - 50) + 50
};

Shape.prototype.getTriangle = function () {
	var graphics = new PIXI.Graphics(),
			startX = this.getRandomX(),
			ticker = new PIXI.ticker.Ticker();

	graphics.beginFill(this.getRandomColor());

	graphics.moveTo(startX, this.startY);
	graphics.lineTo(startX + 50, this.startY + 50);
	graphics.lineTo(startX - 50, this.startY + 50);
	graphics.lineTo(startX, this.startY);

	graphics.endFill();

	graphics.buttonMode = true;
	graphics.interactive = true;

	ticker.add(this.loop.bind(this, ticker, graphics));
	ticker.start();

	return graphics
};

Shape.prototype.getSquare = function () {
	var graphics = new PIXI.Graphics(),
			startX = this.getRandomX(),
			ticker = new PIXI.ticker.Ticker();

	graphics.lineStyle(4, this.getRandomColor(), 1);
	graphics.beginFill(this.getRandomColor(), 1);
	graphics.drawRect(startX, this.startY, 50, 50);
	graphics.endFill();

	graphics.buttonMode = true;
	graphics.interactive = true;

	ticker.add(this.loop.bind(this, ticker, graphics));
	ticker.start();

	return graphics
};

Shape.prototype.getPentagon = function () {
	var graphics = new PIXI.Graphics(),
			ticker = new PIXI.ticker.Ticker();

	var numberOfSides = 5, i,
			size = 50,
			x = this.getRandomX(),
			y = this.startY,
			step = 2 * Math.PI / numberOfSides,
			shift = (Math.PI / 180.0) * -18;

	graphics.beginFill(this.getRandomColor());
	graphics.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));

	for (i = 0; i <= numberOfSides; i++) {
		var curStep = i * step + shift;
		graphics.lineTo(x + size * Math.cos(curStep), y + size * Math.sin(curStep));
	}

	graphics.endFill();

	graphics.buttonMode = true;
	graphics.interactive = true;

	ticker.add(this.loop.bind(this, ticker, graphics));
	ticker.start();

	return graphics
};

Shape.prototype.getHexagon = function () {
	var graphics = new PIXI.Graphics(),
			ticker = new PIXI.ticker.Ticker();

	var side = 0,
			size = 50,
			x = this.getRandomX(),
			y = this.startY;

	graphics.beginFill(this.getRandomColor());

	graphics.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));

	for (side; side < 7; side++) {
		graphics.lineTo(x + size * Math.cos(side * 2 * Math.PI / 6), y + size * Math.sin(side * 2 * Math.PI / 6));
	}

	graphics.endFill();

	graphics.buttonMode = true;
	graphics.interactive = true;

	ticker.add(this.loop.bind(this, ticker, graphics));
	ticker.start();

	return graphics
};

Shape.prototype.getCircle = function () {
	var graphics = new PIXI.Graphics(),
			ticker = new PIXI.ticker.Ticker();

	graphics.beginFill(this.getRandomColor());
	graphics.drawCircle(this.getRandomX(), this.startY, 50);
	graphics.endFill();

	graphics.buttonMode = true;
	graphics.interactive = true;

	ticker.add(this.loop.bind(this, ticker, graphics));
	ticker.start();

	return graphics
};

Shape.prototype.getEllipse = function () {
	var graphics = new PIXI.Graphics(),
			ticker = new PIXI.ticker.Ticker();

	graphics.beginFill(this.getRandomColor());
	graphics.drawEllipse(this.getRandomX(), this.startY, 50, 25);
	graphics.endFill();

	graphics.buttonMode = true;
	graphics.interactive = true;

	ticker.add(this.loop.bind(this, ticker, graphics));
	ticker.start();

	return graphics
};