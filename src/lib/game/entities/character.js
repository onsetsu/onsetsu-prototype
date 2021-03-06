ig.module(
	'game.entities.character'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityCharacter = ig.Entity.extend({
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
