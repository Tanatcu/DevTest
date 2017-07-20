function Shape() {
	this.startY = -100;
	this.finishY = 700;

	var model = SingleModel.get();

	this.loop = function (ticker, graphics) {
		graphics.y += model.getGravity();

		if (graphics.y > this.finishY) {

			// Feels like this very bad code
			// because this part of code must not be here
			ticker.stop();
			model.minusShapeArea(graphics.area);
			graphics.destroy();
			model.decreaseCount();
		}
	};
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
			ticker = new PIXI.ticker.Ticker(),
			height = 50,
			pathOfBottom = 50;

	graphics.beginFill(this.getRandomColor());

	graphics.moveTo(startX, this.startY);
	graphics.lineTo(startX + pathOfBottom, this.startY + height);
	graphics.lineTo(startX - pathOfBottom, this.startY + height);
	graphics.lineTo(startX, this.startY);

	graphics.endFill();

	// 1/2 * a * h
	graphics.area = pathOfBottom * 2 * height / 2;
	graphics.name = 'triangle';

	graphics.buttonMode = true;
	graphics.interactive = true;

	ticker.add(this.loop.bind(this, ticker, graphics));
	ticker.start();

	return graphics
};

Shape.prototype.getSquare = function () {
	var graphics = new PIXI.Graphics(),
			startX = this.getRandomX(),
			ticker = new PIXI.ticker.Ticker(),
			verticalWall = 50,
			horizontalWall = 50;

	graphics.lineStyle(4, this.getRandomColor(), 1);
	graphics.beginFill(this.getRandomColor(), 1);
	graphics.drawRect(startX, this.startY, verticalWall, horizontalWall);
	graphics.endFill();

	// h * w
	graphics.area = verticalWall * horizontalWall;
	graphics.name = 'square';

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

	// n·a2/4·tg(360/°2n)
	graphics.area = (Math.pow(size, 2) * numberOfSides) / (Math.tan((360 / (2 * numberOfSides)) / 180 * Math.PI) * 4);
	graphics.name = 'pentagon';

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
			sidesCount = 6,
			size = 50,
			x = this.getRandomX(),
			y = this.startY;

	graphics.beginFill(this.getRandomColor());

	graphics.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));

	for (side; side < 7; side++) {
		graphics.lineTo(x + size * Math.cos(side * 2 * Math.PI / 6), y + size * Math.sin(side * 2 * Math.PI / 6));
	}

	graphics.endFill();

	// n·a2/4·tg(360/°2n)
	graphics.area = (Math.pow(size, 2) * sidesCount) / (Math.tan((360 / (2 * sidesCount)) / 180 * Math.PI) * 4);
	graphics.name = 'hexagon';

	graphics.buttonMode = true;
	graphics.interactive = true;

	ticker.add(this.loop.bind(this, ticker, graphics));
	ticker.start();

	return graphics
};

Shape.prototype.getCircle = function () {
	var graphics = new PIXI.Graphics(),
			ticker = new PIXI.ticker.Ticker(),
			radius = 50; //can be improved to generating circles with different radius

	graphics.beginFill(this.getRandomColor());
	graphics.drawCircle(this.getRandomX(), this.startY, radius);
	graphics.endFill();

	// PI * R^2
	graphics.area = Math.PI * Math.pow(radius, 2);
	graphics.name = 'circle';

	graphics.buttonMode = true;
	graphics.interactive = true;

	ticker.add(this.loop.bind(this, ticker, graphics));
	ticker.start();

	return graphics
};

Shape.prototype.getEllipse = function () {
	var graphics = new PIXI.Graphics(),
			ticker = new PIXI.ticker.Ticker(),
			widthHalf = 50,
			heightHalf = 25;

	graphics.beginFill(this.getRandomColor());
	graphics.drawEllipse(this.getRandomX(), this.startY, widthHalf, heightHalf);
	graphics.endFill();

	graphics.area = Math.PI * widthHalf * heightHalf; // PI * 'half of width' * 'half of height'
	graphics.name = 'ellipse';

	graphics.buttonMode = true;
	graphics.interactive = true;

	ticker.add(this.loop.bind(this, ticker, graphics));
	ticker.start();

	return graphics
};
