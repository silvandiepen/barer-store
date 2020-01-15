const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const Task = require("./api/models/todoListModel"); //created model loading here
const bodyParser = require("body-parser");

// mongoose instance connection url connection
mongoose.set("useNewUrlParser", true);
mongoose.Promise = global.Promise;

mongoose
	.connect("mongodb://localhost/Tododb", {
		useUnifiedTopology: true,
		useNewUrlParser: true
	})
	.then(() => console.log("DB Connected!"))
	.catch((err) => {
		console.log(`DB Connection Error: ${err.message}`);
	});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(request, result) {
	result.status(404).send({ url: request.originalUrl + " not found" });
});

const routes = require("./api/routes/todoListRoutes"); //importing route
routes(app); //register the route

app.listen(port);

console.log("todo list RESTful API server started on: " + port);
