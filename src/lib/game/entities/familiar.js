ig.module(
	'game.entities.familiar'
)
.requires(
	'game.entities.character'
)
.defines(function(){

EntityFamiliar = EntityCharacter.extend({
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
