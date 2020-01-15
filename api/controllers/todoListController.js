"use strict";

const mongoose = require("mongoose");
const Task = mongoose.model("Tasks");

exports.listTasks = (request, result) => {
	Task.find({}, (error, task) => {
		if (error) result.send(error);
		result.json(task);
	});
};

exports.createTask = (request, result) => {
	const newTask = new Task(request.body);
	newTask.save((error, task) => {
		if (error) result.send(error);
		result.json(task);
	});
};

exports.readTask = (request, result) => {
	Task.findById(request.params.taskId, (error, task) => {
		if (error) result.send(error);
		result.json(task);
	});
};

exports.updateTask = (request, result) => {
	Task.findOneAndUpdate(
		{ _id: request.params.taskId },
		request.body,
		{ new: true },
		(error, task) => {
			if (error) result.send(error);
			result.json(task);
		}
	);
};

exports.deleteTask = (request, result) => {
	Task.remove(
		{
			_id: request.params.taskId
		},
		(error) => {
			if (error) result.send(error);
			result.json({ message: "Task successfully deleted" });
		}
	);
};
