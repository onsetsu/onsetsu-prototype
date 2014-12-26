ig.module(
	'game.font'
)
.requires(
	'impact.font'
)
.defines(function(){

Font = new ig.Font('media/onsetsufontblack.png');
Font.letterSpacing -= 2;
Font.lineSpacing -= 2;

});
