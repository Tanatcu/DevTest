function Controller(view, model) {

	var buttons = view.getButtons(),
			container = SinglePixi.getInstance(),
			interval = null;

	buttons[0].addEventListener('click', function () {
		if (model.shapePerSecond > 0) {
			model.decreaseShapePerSecond();
			autoGenerate();
		}
	});

	buttons[1].addEventListener('click', function () {
		model.increaseShapePerSecond();
		autoGenerate();
	});

	buttons[2].addEventListener('click', function () {
		if (model.gravity > 0) {
			model.decreaseGravity()
		}
	});

	buttons[3].addEventListener('click', function () {
		model.increaseGravity()
	});

	function autoGenerate() {
		var shapePerSecond = model.getShapePerSecond();

		if (interval) {
			clearInterval(interval);
		}

		if (shapePerSecond !== 0) {
			interval = container.interval(shapePerSecond)
		}
	}

	return {
		autoGenerate: autoGenerate
	}
}