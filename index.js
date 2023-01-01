const owlFactory = require('owl-factory');

class TestController {
	constructor() {}

	getMsg = owlFactory.catchAsync(async (req, res, next) => {
		res.send('welcome to this endpoint');
	});
}

class TestRoute {
	path = '/test';
	router = owlFactory.Router();
	controller = new TestController();
	constructor() {
		this.initializeRoutes();
	}
	initializeRoutes() {
		this.router.get(`${this.path}`, this.controller.getMsg);
	}
}

const server = new owlFactory([new TestRoute()]);

server.listen();
