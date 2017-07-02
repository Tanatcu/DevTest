function Shape(options) {
	this.acreage = options.acreage;
	this.sideCount = options.sideCount || 3;

	this.generateShape = function () {

	};

	this.shapeInstance = this.generateShape();
}