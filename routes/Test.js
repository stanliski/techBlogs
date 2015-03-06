//mongoose setup
require('../models/db');
var mongoose = require('mongoose');
var Blog = mongoose.model('Blog');
var	Label = mongoose.model('Label');
var Group = mongoose.model('Group');

group = new Group();

group.title = 'Linux';
group.updated_at = Date.now();
group.created_at = Date.now();

group.save(function(err, group){
	if(err)
		console.log(err);
});


//Blog.findOne({ title:blog.title})
//.populate({path:'labels'})
//.exec(function(err, blog){
//	if(err)
//		return handleError(err);
//	
//	console.log('The label is %s', blog.labels[0].content);
//});
//
//Blog.find({}).populate('labels').exec(function(err, blogs){
//	var result = new Array();
//	for(var i = 0; i < blogs.length; i++){
//		var labels = blogs[i].labels;
//		for(var j = 0; j < labels.length; j++){
//			if(labels[j]._id == '54c747e5100bd61206961ebf'){
//				result.push(blogs[i].title);
//			}
//		}
//	}
//	for(var j = 0; j < result.length; j++){
//		console.log(result[j]);
//	}
//});

// Skip == start index
// limit == show page number.

//Label.find({}).sort('updated_at').skip(2).limit(10).exec(function(err, docs){
//	var len = docs.length;
//	console.log(len);
//	if(len == 0){
//		console.log('no data');
//	}
//	docs.forEach(function(doc){
//		console.log(doc.content);
//	})
//})