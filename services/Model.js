function Model(initData) {
	this.shapeArray = [];
	this.shapeCount = 0;
	this.summaryShapedAcreage = 0;

	this.shapePerSecond = initData.shapePerSecond || 1;
	this.gravity = initData.gravity || 10;

	this.getShapeArray = function () {
		return this.shapeArray
	};

	this.getShapeCount = function () {
		return this.shapeCount
	};

	this.getsummaryShapedAcreage = function () {
		return this.summaryShapedAcreage
	};

	this.getShapePerSecond = function () {
		return this.shapePerSecond
	};

	this.getGravity = function () {
		return this.gravity
	};

	this.changingShowedShapesCount = new Observer();
	this.changingSummaryAcreageOfShowedShapes = new Observer();

	this.changingShapePerSecond = new Observer();
	this.changingGravity = new Observer();
}

Model.prototype.increaseShapePerSecond = function () {
	+this.shapePerSecond++;
	this.changingShapePerSecond.notify();
};

Model.prototype.decreaseShapePerSecond = function () {
	+this.shapePerSecond--;
	this.changingShapePerSecond.notify();
};

Model.prototype.increaseGravity = function () {
	+this.gravity++;
	this.changingGravity.notify();
};

Model.prototype.decreaseGravity = function () {
	+this.gravity--;
	this.changingGravity.notify();
};

Model.prototype.addShape = function (shape) {
	this.shapeArray.push(shape);
	this.shapeCount = this.shapeArray.length;
	this.changingShowedShapesCount.notify();
};

Model.prototype.removeShape = function (index) {
	this.shapeArray.splice(index, 1);
	this.shapeCount = this.shapeArray.length;
	this.changingShowedShapesCount.notify();
};
