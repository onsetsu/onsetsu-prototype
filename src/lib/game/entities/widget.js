ig.module(
	'game.entities.widget'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityWidget = ig.Entity.extend({
	_wmScalable: true,
	_wmDrawBox: true,
	_wmBoxColor: '#123456',

	//size: {x:32, y:32},

	init: function(x, y, settings) {
		this.parent(x, y, settings);
	},
	update: function() {
		this.parent();
	},
	draw: function() {
		this.parent();
	},
	onclick: function(callback) {
	    this.click = callback;
	},
	offclick: function() {
	    this.click = undefined;
	},
	ondrag: function(callback) {
	    this.drag = callback;
	},
	offdrag: function() {
	    this.drag = undefined;
	}
});

});
