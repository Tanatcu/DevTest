var Container = PIXI.Container,
		autoDetectRenderer = PIXI.autoDetectRenderer,
		loader = PIXI.loader,
		resources = PIXI.loader.resources,
		Sprite = PIXI.Sprite;

var view = new View({val: 5}, document.getElementsByTagName('body')[0]);

//Create a Pixi stage and renderer
var stage = new Container(),
		renderer = autoDetectRenderer(256, 256);
document.body.appendChild(renderer.view);

//Load an image and the run the `setup` function
loader
		.add("images/cat.png")
		.load(setup);

//Define any variables that are used in more than one function
var cat;

function setup() {

	//Create the `cat` sprite
	cat = new Sprite(resources["images/cat.png"].texture);
	cat.x = 96;
	cat.y = 0;

	cat.vy = 0;
	console.log(view.getShownShapesCount());

	stage.addChild(cat);

	//Start the game loop
	gameLoop();
}

function gameLoop() {

	//Loop this function 60 times per second
	requestAnimationFrame(gameLoop);

	cat.vy = (cat.y < 200) ? 1 : 0;

	cat.y += cat.vy;

	//Render the stage
	renderer.render(stage);
}