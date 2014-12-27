ig.module(
	'game.entities.field'
)
.requires(
	'game.entities.widget'
)
.defines(function(){

FieldDescriptions = {
	'Normal': {
		sheetIndex: 0
	},
	'Shadow': {
		sheetIndex: 24
	},
	'Light': {
		sheetIndex: 33
	},
	'Fire': {
		sheetIndex: 42
	},
	'Earth': {
		sheetIndex: 51
	},
	'Water': {
		sheetIndex: 60
	},
	'Wind': {
		sheetIndex: 69
	}
};

EntityField = EntityWidget.extend({
	size: {x:32, y:32},
	animSheet: new ig.AnimationSheet('media/board.png', 32, 32),
	init: function(x, y, settings) {
		this.parent(x, y, settings);

        this.applySettings(settings);
	},
	applySettings: function(settings) {
        this.type = settings.type;
        this.indexX = settings.indexX;
        this.indexY = settings.indexY;

        this.setAnim(this.type);
	},
	setAnim: function(type) {
		this.addAnim(type, 1, [FieldDescriptions[type].sheetIndex], true);
		this.currentAnim = this.anims[type];
	}
});

});
