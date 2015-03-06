//mongoose setup
require('../models/db');
var express = require('express');
var mongoose = require('mongoose');
var Blog = mongoose.model('Blog');
var	Label = mongoose.model('Label');
var Group = mongoose.model('Group');
var router = express.Router();


/** GET ONE BLOG BY ID. */
router.get('/get', function(req, res){
	var id = req.query['id'];
	Blog.findOne({_id:id}).populate('labels').exec(function(err, blog){
		Group.find({}).sort('-created_at').exec(function(err, groups){
			if(err)
				return handleError(err);
			res.render('blog',{
				blog: blog,
				labels: blog.labels,
				groups: groups
			});
		});
	});
});


/** GET ONE BLOG BY ID. */
router.get('/', function(req, res){
	Blog.findById('54d239d063ee68c9045bc4a8', function(err, blog){
		Group.find({}).sort('-created_at').exec(function(err, groups, count){
			if(err)
				return handleError(err);
			res.render(
					'blog',
					{
						blog:blog,
						groups:groups
					});
		});
	});

});

router.get('/intro', function(req, res){
	var id = req.query['id'];
	Blog.find({}).sort('-created_at').populate('group').exec(function(err, blogs, count){
		if(err)
			return handleError(err);
		var bloglist = new Array();
		for(var i = 0; i < blogs.length; i++){
			if(blogs[i].group._id == id){
				bloglist.push(blogs[i]);
			}
		}
		Group.find({}).sort('-created_at').exec(function(err, group, count){
			res.render(
					'intro',
					{
						blogs:bloglist,
						groups:group
					});
		});
		
	});
});

module.exports = router;