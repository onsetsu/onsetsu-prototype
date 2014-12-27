ig.module(
	'game.entities.syllable-selection'
)
.requires(
	'impact.entity',
	'game.entities.syllable'
)
.defines(function(){

EntitySyllableSelection = ig.Entity.extend({
	init: function(x, y, settings) {
		this.parent(x, y, settings);

		this.applySettings(settings);

        this.initSyllables();

	    this.size.x = 1;
	    this.size.y = 1;
	},
	applySettings: function(settings) {
	    this.mage = settings.mage;
	},
	initSyllables: function() {
	    var syllableDescriptions = [
            EntitySyllable.getFire(),
            EntitySyllable.getWater(),
            EntitySyllable.getEarth(),
            EntitySyllable.getWind(),
            EntitySyllable.getLight(),
            EntitySyllable.getShadow(),

            EntitySyllable.getChi(),
            EntitySyllable.getMa(),
            EntitySyllable.getPai(),

            EntitySyllable.getNif(),
            EntitySyllable.getKun(),
            EntitySyllable.getRyo(),

            EntitySyllable.getRen(),
            EntitySyllable.getYun(),
            EntitySyllable.getTo(),

            EntitySyllable.getGam(),
            EntitySyllable.getXau(),
            EntitySyllable.getEx()
	    ];
	    this.syllablesByName = {};
	    this.syllables = _.map(syllableDescriptions, function(syllableDescription, index) {
	        var pos = this.posForIndex(index);
	        var entitySyllable = ig.game.spawnEntity(EntitySyllable, pos.x, pos.y, syllableDescription);
	        entitySyllable.zIndex = 200;

	        this.syllablesByName[entitySyllable.name] = entitySyllable;
	        return entitySyllable;
	    }, this);
	},
	posForIndex: function(index) {
	    return {
	        x: this.pos.x + 32 * index,
	        y: this.pos.y
	    };
	},
	eachSyllable: function(callback, context) {
		_.each(this.syllables, callback, context);
	},
	update: function() {
		this.parent();
	},
	draw: function() {
		this.parent();
	}
});

});
