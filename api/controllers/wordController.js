"use strict";

const mongoose = require("mongoose");
const Word = mongoose.model("Words");

exports.listWords = (request, result) => {
	Word.find({}, (error, word) => {
		if (error) result.send(error);
		result.json(word);
	});
};

exports.createWord = (request, result) => {
	const newWord = new Word(request.body);
	newWord.save((error, word) => {
		if (error) result.send(error);
		result.json(word);
	});
};

exports.readWord = (request, result) => {
	Word.findById(request.params.wordId, (error, word) => {
		if (error) result.send(error);
		result.json(word);
	});
};

exports.updateWord = (request, result) => {
	Word.findOneAndUpdate(
		{ _id: request.params.wordId },
		request.body,
		{ new: true },
		(error, word) => {
			if (error) result.send(error);
			result.json(word);
		}
	);
};

exports.deleteWord = (request, result) => {
	Word.remove(
		{
			_id: request.params.wordId
		},
		(error) => {
			if (error) result.send(error);
			result.json({ message: "Key => Value successfully deleted" });
		}
	);
};
