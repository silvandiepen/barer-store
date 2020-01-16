"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WordSchema = new Schema({
	key: {
		type: String,
		required: "Give Key",
		required: [true, "Key is required"]
	},
	value: {
		type: String,
		required: [false, "Give a value"]
	},
	language: {
		type: String,
		required: [true, "Give Language"]
	},
	created: {
		type: Date,
		default: Date.now
	},
	status: {
		type: [
			{
				type: String,
				enum: ["pending", "published"]
			}
		],
		default: ["pending"]
	}
});

module.exports = mongoose.model("Words", WordSchema);
