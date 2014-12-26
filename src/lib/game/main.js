Onsetsu = {};
SyllableSize = { x: 32, y: 32 };

ig.module(
	'game.main' 
)
.requires(
	'game.game'
)
.defines(function(){

ig.main( '#canvas', Onsetsu.Game, 60, 1136, 640, 1 );

});
