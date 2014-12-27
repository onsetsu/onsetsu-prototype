ig.module(
	'game.systems.tween'
)
.requires(
	'game.systems.system'
)
.defines(function(){

SystemTween = System.extend({
	beforeUpdate: function() {
		this.parent();

        TWEEN.update();
	}
});

});
