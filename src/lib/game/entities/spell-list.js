ig.module(
	'game.entities.spell-list'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntitySpellList = ig.Entity.extend({
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
