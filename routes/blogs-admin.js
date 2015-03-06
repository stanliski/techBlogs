//mongoose setup
require('../models/db');
var express = require('express');
var mongoose = require('mongoose');
var Blog = mongoose.model('Blog');
var Group = mongoose.model('Group');
var	Label = mongoose.model('Label');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('admin-index', { title: 'Express' });
});

/* GET Blog List. */
router.get('/list', function(req, res){
	Blog.find({}).populate('group').sort('-created_at').exec(function(err, blogs, count){
		Label.find(function(err, labels, count){
			Group.find({}).sort('-created_at').exec(function(err, groups, count){
				res.render('admin-blog-list',{
					blogs : blogs,
					labels: labels,
					groups: groups
				});
			});
		});
	});
	
//	Blog.find({})
//	.populate('labels')
//	.populate('group').exec(function(err, blogs, count){
//		res.render('admin-blog-list',{
//			blogs : blogs,
//			labels: blogs.labels,
//			group: blogs.group
//		});
//	});
});

/* GET BLOG BY JSON. */
router.get('/listByJson', function(req, res){
	Blog.find({}).sort('-created_at').exec(function(err, blogs, count){
		if(err)
			return handleError(err);
		res.json({blogs:blogs});
	});
});

/* GET BLOG LABELS BY JSON */
router.get('/getBlogLabels', function(req, res){
	if(req.body.id != ''){
		var reqId = req.body.id;
		Blog.findOne({_id:reqId}).populate('labels').exec(function(err, blog){
			res.json({lables:blog.labels});
		});
	}

});

/**
 * GET WRITE BLOG PAGE.
 */
router.get('/writeBlog', function(req, res){
	Label.find({}).sort('-created_at').exec(function(err, labels, count){
		Group.find({}).sort('-created_at').exec(function(err, groups, count){
			if(err)
				return handleError(err);
			res.render('admin-write-blog',{
				labels:labels,
				groups:groups
			});
		})
	});
});

/**
 * EDIT BLOG PAGE.
 */
router.get('/editBlog', function(req, res){
	var id = req.query['id'];
	if(id != ''){
		Blog.findOne({_id:id}).populate('labels').populate('group').exec(function(err, blog){
			Label.find({}).sort('-created_at').exec(function(err, labels, count){
				Group.find({}).sort('-created_at').exec(function(err, groups, count){
					if(err)
						return handleError(err);
					res.render('admin-edit-blog', {
						blog:blog,
						selectedlabels:blog.labels,
						labels:labels,
						groups:groups,
						selectedGroup:blog.group
					});
				});
			});
		});
	}
});

/**
 * OP BLOG LOGs PAGE.
 */
router.get('/log', function(req, res){
	res.render('admin-log');
});

/**
 * HELP PAGE
 */
router.get('/help', function(req, res){
	res.render('admin-help');
});

/* CREAT ONE BLOG */
router.post('/create', function(req, res){
	var labelIdList = req.body.labelIdList;
	var groupId = req.body.groupId;
	console.log('init a blog entity');
	console.log('parameter = ' + labelIdList);
	var blog = new Blog({
		title		: req.body.title,
		content		: req.body.content,
		keywords	: req.body.keywords,
		created_at  : Date.now(),
		updated_at 	: Date.now()
	});
	blog.save(function(err, blog){
		if(err)
			return handleError(err);
		var labelIdArray = labelIdList.split(' ');
		for(var i = 0; i < labelIdArray.length; i++){
			Label.findById(labelIdArray[i], function(err, label){
				label.blogs.push(blog);
				label.save(function(err, label){
					blog.labels.push(label);
					blog.save(function(err, blog){
						if(err)
							return handleError(err);
						Blog.findOne({ title:blog.title})
						.populate({path:'labels'})
						.exec(function(err, blog){
							if(err)
								return handleError(err);
							console.log('The label is %s', blog.labels[0].content);
						});
					});
				});
			});
		}
		
		Group.findById(groupId, function(err, group){
			group.blogs.push(blog);
			group.save(function(err, group){
				blog.group = group;
				blog.save(function(err, blog){
					if( err )
						console.log('insert blog error when make a relation with group.');
					console.log('insert one blog into database');
				})
			});
		});
	});
	res.json({status:'ok'});
});

/** EDIT ONE BLOG BY ID */
router.post('/update', function(req, res){
	var lableIdArray = req.body.labelIdList.split(' ');
	var groupId = req.body.groupId;
	Blog.findById(req.body.id, function(err, blog){
		blog.title = req.body.title;
		blog.content = req.body.content;
		blog.updated_at = Date.now();
		blog.keywords = req.body.keywords;
		blog.labels = [];
		blog.save(function(err, blog){
			if(err)
				return handleError(err);
			for(var i = 0; i < lableIdArray.length; i++){
				Label.findById(lableIdArray[i], function(err, label){
					label.blogs.push(blog);
					label.save(function(err, label){
						blog.labels.push(label);
						blog.save(function(err, blog){
							if(err)
								return handleError(err);
							console.log(blog.title);
						});
					});
				});
			}
		});
		
		Group.findById(groupId, function(err, group){
			group.blogs.push(blog);
			group.save(function(err, group){
				blog.group = group;
				blog.save(function(err, blog){
					if( err )
						console.log('insert blog error when make a relation with group.');
					console.log('insert one blog into database');
				})
			});
		});
		
	});
	res.json({status:'ok'});
});

/* REMOVE BLOG BY ID */
router.post('/remove', function(req, res){
	console.log(req.body.id);
	Blog.findById(req.body.id, function(err, blog){
		blog.remove(function(err, blog){
			if(err)
				return handleError(err);
			res.json({status: 'ok'});
		});
	});
});

/** GET ONE BLOG BY ID. */
router.post('/get', function(req, res){
	Blog.findById(req.body.id, function(err, blog){
		if(err)
			return handleError(err);
		res.json({
			blog:blog,
			labels:blog.labels
		});
	});
});

module.exports = router;