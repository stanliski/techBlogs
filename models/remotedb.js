var mongoose_remote = require( 'mongoose' );
var Schema   = mongoose_remote.Schema;
 
// Config 
//var Settings = new Schema({
//})


// Group Entity
var Group = new Schema({
	title	: String,
	blogs 	: [{ type: Schema.Types.ObjectId, ref: 'Blog'}],
	updated_at	: Date,
	created_at 	: Date
});

// Blog Entity.
var Blog = new Schema({
	title	   : String,
	content	   : String,
	keywords   : String,
	labels	   : [{ type: Schema.Types.ObjectId, ref: 'Label'}],
	group	   : { type: Schema.Types.ObjectId, ref: 'Group' },
	updated_at : Date,
    created_at : Date
});

// Label Entity.
var Label = new Schema({
	content    : String,
	blogs	   : [{ type: Schema.Types.ObjectId, ref: 'Blog'}],
	updated_at : Date,
	created_at : Date
});
 
var Blog = mongoose.model( 'Blog', Blog );
var Label = mongoose.model(	'Label', Label );
var Group = mongoose.model(	'Group', Group );

//mongoose.connect( 'mongodb://42.96.203.20/techblogs' );
mongoose_remote.connect( 'mongodb://42.96.203.20/techblogs' );