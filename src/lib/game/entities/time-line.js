ig.module(
	'game.entities.time-line'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityTimeLine = ig.Entity.extend({
	//size: {x:32, y:32},
	_wmScalable: true,
	_wmDrawBox: true,
	_wmBoxColor: '#123456',
	init: function(x, y, settings) {
		this.parent(x, y, settings);
	},
	update: function() {
		this.parent();
	},
	draw: function() {
		this.parent();
	}
});

});
