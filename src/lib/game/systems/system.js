ig.module(
	'game.systems.system'
)
.requires(
	'impact.impact'
)
.defines(function(){

System = ig.Class.extend({
	init: function(game) {},
	update: function(game) {},
	draw: function(game) {}
});

});
