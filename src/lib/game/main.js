Onsetsu = {};

ig.module(
	'game.main' 
)
.requires(
	'game.game'
)
.defines(function(){

ig.main( '#canvas', Onsetsu.Game, 60, 1136, 640, 1 );

});
