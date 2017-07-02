!function () {

	var model = new Model({
		shapePerSecond: 1,
		gravity: 10
	});

	var view = new View(model, document.getElementById('app'));
	var controller = new Controller(view, model);
}();