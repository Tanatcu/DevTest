function Model() {
	this.shapeArray = [];
	this.shapeCount = 0;
	this.summaryShapedAcreage = 0;

	this.shapePerSecond = 1;
	this.gravity = 5;

	this.getShapeArray = function () {
		return this.shapeArray
	};

	this.getShapeCount = function () {
		return this.shapeCount
	};

	this.getSummaryShapedAcreage = function () {
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

Model.prototype.increaseCount = function () {
	this.shapeCount++;
	this.changingShowedShapesCount.notify();
};

Model.prototype.decreaseCount = function () {
	this.shapeCount--;
	this.changingShowedShapesCount.notify();
};

Model.prototype.addShapeArea = function (area) {
	this.summaryShapedAcreage += Math.round(area);
	this.changingSummaryAcreageOfShowedShapes.notify();
};

Model.prototype.minusShapeArea = function (area) {
	this.summaryShapedAcreage -= Math.round(area);
	this.changingSummaryAcreageOfShowedShapes.notify();
};

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

var SingleModel = (function () {
	var model = null;

	return {
		get: function () {
			if (!model) {
				model = new Model()
			}

			return model
		}
	}
})();
