ig.module(
	'game.systems.system'
)
.requires(
	'impact.impact'
)
.defines(function(){

System = ig.Class.extend({
	init: function() {},
	beforeUpdate: function() {},
	afterUpdate: function() {},
	beforeDraw: function() {},
	afterDraw: function() {}
});

});
