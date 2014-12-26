ig.module(
	'game.entities.spell-list'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntitySpellList = ig.Entity.extend({
	init: function(x, y, settings) {
		this.parent(x, y, settings);

		this.spells = [];
	},
    addSpell: function(spellDescription) {
        var pos = this.posForIndex(this.spells.length);
        var spell = ig.game.spawnEntity(EntitySpell, pos.x, pos.y, spellDescription);
        spell.zIndex = 100;
        this.spells.push(spell);

        this.calculateSize();
        return spell;
    },
	posForIndex: function(index) {
	    var y = this.pos.y;
	    for(var i = 0; i < index; i++) {
            y += this.spells[i].size.y;
	    }
	    return {
	        x: this.pos.x,
	        y: y
	    };
	},
	calculateSize: function() {
	    var x = _.max(this.spells, function(spell) {
                return spell.size.x;
            }).size.x,
	        y = _.reduce(this.spells, function(acc, spell) {
	            return acc + spell.size.y;
	        }, 0);
	    this.size.x = x;
	    this.size.y = y;
	},
	update: function() {
		this.parent();
	},
	draw: function() {
		this.parent();
	}
});

});
