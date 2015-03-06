//mongoose setup
require('../models/db');
var express = require('express');
var mongoose = require('mongoose');
var Label = mongoose.model('Label');
var router = express.Router();


/* GET BLOG LIST BY LABEL ID */ 
router.post('/getBlogList', function(req, res){
	if(req.body.id != ''){
		Label.findOne({_id:req.body.id}).populate('blogs').exec(function(err, label){
			res.direct('/blogIntro', {
				blogs:label.blogs
			});
		});
	}
});

/* GET LABEL BY JSON. */
router.post('/listByJson', function(req, res){
	Label.find({}).sort('-created_at').exec(function(err, labels, count){
		if(err)
			return handleError(err);
		res.json({labels:labels});
	});
});

/* CREATE LABEL BY JSON */
router.post('/create', function(req, res){
	if(req.body.content.trim() != ''){
		new Label({
			content	: req.body.content,
			created_at	: Date.now(),
			updated_at	: Date.now()
		}).save(function(err, label, count){
			console.log(label.content);
			if(err)
				return handleError(err);
			res.json({status: 'ok'});
		});
	}
});

/* REMOVE LABEL */
router.post('/remove', function(req, res){
	Label.findById(req,body.id, function(err, label){
		label.remove(function(err, label){
			if(err)
				return handleError(err);
			res.json({status:"ok"});
		});
	});
});

module.exports = router;