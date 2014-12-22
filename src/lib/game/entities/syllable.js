ig.module(
	'game.entities.syllable'
)
.requires(
	'impact.entity'
)
.defines(function(){

// TODO: find and replace!!!
Syllables = {
	'__usused1__': {
		cost: 2,
		label: '__usused1__',
		sheetIndex: 78
	},
	'__usused2__': {
		cost: 2,
		label: '__usused2__',
		sheetIndex: 79
	},
	'Fire': {
		cost: 2,
		label: 'Fire',
		sheetIndex: 80
	},
	'Water': {
		cost: 2,
		label: 'Water',
		sheetIndex: 81
	},
	'Earth': {
		cost: 2,
		label: 'Earth',
		sheetIndex: 82
	},
	'Wind': {
		cost: 2,
		label: 'Wind',
		sheetIndex: 83
	},
	'Light': {
		cost: 2,
		label: 'Light',
		sheetIndex: 84
	},
	'Shadow': {
		cost: 2,
		label: 'Shadow',
		sheetIndex: 85
	},
	'__usused3__': {
		cost: 2,
		label: '__usused3__',
		sheetIndex: 86
	},
	'__usused4__': {
		cost: 2,
		label: '__usused4__',
		sheetIndex: 87
	},
	'Kun': {
		cost: 2,
		label: 'Kun',
		sheetIndex: 88
	},
	'gam': {
		cost: 2,
		label: 'Fire',
		sheetIndex: 89
	},
	'nif': {
		cost: 2,
		label: 'Fire',
		sheetIndex: 90
	},
	'pai': {
		cost: 2,
		label: 'Fire',
		sheetIndex: 91
	},
	'chi': {
		cost: 2,
		label: 'Fire',
		sheetIndex: 92
	},
	'ma': {
		cost: 2,
		label: 'Fire',
		sheetIndex: 93
	},
	'ryo': {
		cost: 2,
		label: 'Fire',
		sheetIndex: 94
	},
	'ex': {
		cost: 2,
		label: 'Fire',
		sheetIndex: 95
	},
	'ren': {
		cost: 2,
		label: 'Fire',
		sheetIndex: 96
	},
	'to': {
		cost: 2,
		label: 'Fire',
		sheetIndex: 97
	},
	'xau': {
		cost: 2,
		label: 'Fire',
		sheetIndex: 98
	},
	'yun': {
		cost: 2,
		label: 'Fire',
		sheetIndex: 99
	},
	'fire_dummy': {
		cost: 2,
		label: 'Fire',
		sheetIndex: 100
	},
	'light_dummy': {
		cost: 2,
		label: 'Fire',
		sheetIndex: 101
	},
	'water_dummy': {
		cost: 2,
		label: 'Fire',
		sheetIndex: 102
	},
	'earth_dummy': {
		cost: 2,
		label: 'Fire',
		sheetIndex: 103
	},
	'shadow_dummy': {
		cost: 2,
		label: 'Fire',
		sheetIndex: 110
	},
	'wind_dummy': {
		cost: 2,
		label: 'Fire',
		sheetIndex: 111
	},
};

var font = new ig.Font( 'media/onsetsufontblack.png' );
font.letterSpacing -= 2;
font.lineSpacing -= 2;

EntitySyllable = ig.Entity.extend({
	size: {x:32, y:32},
	animSheet: new ig.AnimationSheet('media/board.png', 32, 32),
	init: function(x, y, settings) {
		this.parent(x, y, settings);
		
		this.addAnim('__usused2__', 1, [79]);
		this.addAnim('fire', 1, [80]);
		this.addAnim('water', 1, [81]);
		this.addAnim('earth', 1, [82]);
		this.addAnim('wind', 1, [83]);
		this.addAnim('light', 1, [84]);
		this.addAnim('shadow', 1, [85]);
		this.addAnim('__usused3__', 1, [86]);
		this.addAnim('__usused4__', 1, [87]);
		this.addAnim('kun', 1, [88]);
		this.addAnim('gam', 1, [89]);
		this.addAnim('nif', 1, [90]);
		this.addAnim('pai', 1, [91]);
		this.addAnim('chi', 1, [92]);
		this.addAnim('ma', 1, [93]);
		this.addAnim('ryo', 1, [94]);
		this.addAnim('ex', 1, [95]);
		this.addAnim('ren', 1, [96]);
		this.addAnim('to', 1, [97]);
		this.addAnim('xau', 1, [98]);
		this.addAnim('yun', 1, [99]);
		this.addAnim('fire_dummy', 1, [100]);
		this.addAnim('light_dummy', 1, [101]);
		this.addAnim('water_dummy', 1, [102]);
		this.addAnim('earth_dummy', 1, [103]);
		this.addAnim('shadow_dummy', 1, [110]);
		this.addAnim('wind_dummy', 1, [111]);
	},
	update: function() {
		this.parent();

		this.vel.x = 1;
	},
	draw: function() {
		this.parent();
		
		// draw label
		var x = this.pos.x + this.animSheet.width / 2;
		var y = this.pos.y + this.animSheet.height / 4 * 3;
		font.draw( 'Fire', x, y, ig.Font.ALIGN.CENTER );
	}
});

});
