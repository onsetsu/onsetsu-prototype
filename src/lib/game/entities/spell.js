ig.module(
	'game.entities.spell'
)
.requires(
	'impact.entity',
	'game.entities.syllable'
)
.defines(function(){

SpellDescriptions = {
    Fireball: {
        label: 'Fireball',
        syllables: ['Fire', 'Chi', 'Nif'],
        effectText: 'Deal 2 Damage.',
        effect: 'TODO'
    },
    ChainLightning: {
        label: 'ChainLightning',
        syllables: ['Light', 'Chi', 'Nif', 'Pai', 'Ren', 'Nif'],
        effectText: 'Deal 4 Damage to a Creature and 2 Damage to a Creature next to it.',
        effect: 'TODO'
    },
    Whirlwind: {
        label: 'Whirlwind',
        syllables: ['Wind', 'Ex'],
        effectText: 'Deal 1 Damage to all Characters.',
        effect: 'TODO'
    },
    FrostNova: {
        label: 'FrostNova',
        syllables: ['Water', 'Ex', 'To', 'Ryo'],
        effectText: 'Freeze all enemy Creatures.',
        effect: 'TODO'
    },
    EarthWall: {
        label: 'EarthWall',
        syllables: ['Earth', 'Ma', 'Kun'],
        effectText: 'Give a Creature +2/+2 and Taunt.',
        effect: 'TODO'
    },
    HealingTouch: {
        label: 'HealingTouch',
        syllables: ['Light', 'Ma', 'Gam'],
        effectText: 'Restore 6 HP.',
        effect: 'TODO'
    },
    AncientGuardian: {
        label: 'AncientGuardian',
        syllables: ['Earth', 'Gam', 'Chi', 'Kun', 'Xau'],
        effectText: '3/5/6, Taunt',
        effect: 'TODO'
    },
    ForestImp: {
        label: 'ForestImp',
        syllables: ['Earth', 'Chi', 'Xau'],
        effectText: '3/2/4',
        effect: 'TODO'
    },
    RaidLeader: {
        label: 'RaidLeader',
        syllables: ['Shadow', 'Ma', 'Xau'],
        effectText: '1/2/7, All your Creature have +1 Attack.',
        effect: 'TODO'
    },
    FlameMage: {
        label: 'FlameMage',
        syllables: ['Fire', 'Xau', 'Yun', 'Chi', 'Nif'],
        effectText: '4/2/5, Battlecry: Cast Fireball.',
        effect: 'TODO'
    },
    DustElemental: {
        label: 'DustElemental',
        syllables: ['Water', 'Ma', 'Yun', 'Xau'],
        effectText: '3/3/6, Immune to Magic Attacks.',
        effect: 'TODO'
    }
};

EntitySpell = ig.Entity.extend({
	init: function(x, y, settings) {
		this.parent(x, y, settings);

		this.applySettings(settings);

	    this.size.x = settings.syllables.length * SyllableSize.x;
	    this.size.y = Font.heightForString(this.label) + SyllableSize.y;
	},
	applySettings: function(settings) {
	    this.label = settings.label;
	    this.syllables = _(settings.syllables).map(function(syllable, index) {
	        var pos = this.posForIndex(index);
	        var entitySyllable = ig.game.spawnEntity(EntitySyllable, pos.x, pos.y, EntitySyllable['get' + syllable]());
	        entitySyllable.zIndex = 200;
	        return entitySyllable;
	    }, this);
	},
	posForIndex: function(index) {
	    return {
	        x: this.pos.x + 32 * index,
	        y: this.pos.y + Font.heightForString(this.label)
	    };
	},
	update: function() {
		this.parent();
	},
	draw: function() {
		this.parent();

		// draw label
		Font.draw(this.label, this.pos.x, this.pos.y);
	}
});

});
