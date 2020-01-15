"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WordSchema = new Schema({
	key: {
		type: String,
		required: "Give Key"
	},
	value: {
		type: String,
		required: "Give Value"
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
