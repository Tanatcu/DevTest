!function () {
	var model = SingleModel.get();

	var view = new View(model, document.getElementById('app'));
	var controller = new Controller(view, model);

	controller.autoGenerate();
}();