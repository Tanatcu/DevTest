function View(model, root) {

	var bindDataElements = root.querySelectorAll('[data-model]');
	var buttons = root.querySelectorAll('[data-click]');
	var canvas = root.querySelector('#context');

	bindData(bindDataElements[0]);
	bindData(bindDataElements[1]);
	bindData(bindDataElements[2]);
	bindData(bindDataElements[3]);

	model.changingShowedShapesCount.add(function () {
		bindData(bindDataElements[0])
	});

	model.changingSummaryAcreageOfShowedShapes.add(function () {
		bindData(bindDataElements[1])
	});

	model.changingShapePerSecond.add(function () {
		bindData(bindDataElements[2])
	});

	model.changingGravity.add(function () {
		bindData(bindDataElements[3]);
	});

	function bindData(el) {
		el.textContent = model[el.dataset.model]();
	}

	this.getModels = function () {
		return bindDataElements
	};

	this.getButtons = function () {
		return buttons
	};

	this.getCanvas = function () {
		return canvas
	};
}
