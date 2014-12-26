ig.module(
	'game.entities.syllable-board'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntitySyllableBoard = ig.Entity.extend({
	//size: {x:32, y:32},
	_wmScalable: true,
	_wmDrawBox: true,
	_wmBoxColor: '#123456',
	init: function(x, y, settings) {
		this.parent(x, y, settings);

		this.applySettings(settings);
	},
	applySettings: function(settings) {
	    this.boardSize = settings.boardSize;
	    this.mage = settings.mage;

	    this.fields = [];
	    this.syllables = [];
	    for(var i = 0; i < this.boardSize.x; i++) {
	        this.fields.push([]);
	        this.syllables.push([]);
	        for(var j = 0; j < this.boardSize.y; j++) {
	            var pos = this.posForIndex(i, j);
	            var field = ig.game.spawnEntity(
	                EntityField,
	                pos.x,
	                pos.y,
	                {
	                    type: 'Normal',
	                    indexX: i,
	                    indexY: j
	                }
	            );
	            field.zIndex = 100;
    	        this.fields[i].push(field);
	        }
	    }
	},
	update: function() {
		this.parent();
	},
	draw: function() {
		this.parent();
	},
	posForIndex: function(x, y) {
	    return {
	        x: this.pos.x + 32 * x,
	        y: this.pos.y + 32 * y
	    };
	},
	getField: function(x, y) {
	    return this.fields[x][y];
	},
	getSyllable: function(x, y) {
	    return this.syllables[x][y];
	},
	placeSyllable: function(x, y, syllableDescription) {
	    var pos = this.posForIndex(x, y);
	    var syllable = ig.game.spawnEntity(
	        EntitySyllable,
	        pos.x,
	        pos.y,
	        syllableDescription
	    );
	    syllable.zIndex = 200;
	    this.syllables[x][y] = syllable;
	}
});

});
