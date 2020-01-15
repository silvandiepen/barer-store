"use strict";

const routes = (app) => {
	const Word = require("../controllers/wordController");

	// todoList Routes
	app
		.route("/words")
		.get(Word.listWords)
		.post(Word.createWord);

	app
		.route("/word/:wordId")
		.get(Word.readWord)
		.put(Word.updateWord)
		.delete(Word.deleteWord);
};

module.exports = routes;
