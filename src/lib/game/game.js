ig.module(
	'game.game'
)
.requires(
	'impact.game',
	'impact.font',

    // entities
	'game.entities.battle-field',
	'game.entities.field',
	'game.entities.info-text',
	'game.entities.spell',
	'game.entities.spell-list',
	'game.entities.syllable',
	'game.entities.syllable-board',
	'game.entities.syllable-selection',
	'game.entities.time-line',

    // maps
	'game.levels.battle',

    // systems
	'game.systems.widget',

	'impact.debug.debug'
)
.defines(function(){

var _SystemGame = ig.Game.extend({
	init: function() {
	    this.systems = [];
	},

	update: function() {
		this.systems.forEach(function(system) {
		    system.beforeUpdate();
		}, this);

		// Update all entities and backgroundMaps
		this.parent();

		this.systems.forEach(function(system) {
		    system.afterUpdate();
		}, this);
	},

	draw: function() {
		this.systems.forEach(function(system) {
		    system.beforeDraw();
		}, this);

		// Draw all entities and backgroundMaps
		this.parent();

		this.systems.forEach(function(system) {
		    system.afterDraw();
		}, this);
	},

	addSystem: function(systemClass) {
	    var system = new (systemClass)();
	    this.systems.push(system);
	}
});

Onsetsu.Game = _SystemGame.extend({
	init: function() {
	    this.parent();

		// Initialize your game here; bind keys etc.
		ig.input.bind(ig.KEY.MOUSE1, 'leftclick');
		ig.input.bind(ig.KEY.MOUSE2, 'rightclick');
		ig.input.bind(ig.KEY.MWHEEL_UP, 'scrollup');
		ig.input.bind(ig.KEY.MWHEEL_DOWN, 'scrolldown');

		ig.input.bind(ig.KEY.UP_ARROW, 'up');
		ig.input.bind(ig.KEY.DOWN_ARROW, 'down');
		ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
		ig.input.bind(ig.KEY.LEFT_ARROW, 'left');

        // Initialize Battle Field
		this.loadLevel(LevelBattle);

        ([60, 70, 80, 20, 30, 40, 50]).forEach(function(xy) {
            var entity = this.spawnEntity(EntitySyllable, xy, xy, EntitySyllable.getFire());
            entity.onclick(function() {
                entity.vel.x += 1;
                entity.zIndex = xy;
            });
        }, this);

        this.spawnEntity(EntityField, 500, 400, { type: 'Fire' });
        this.spawnEntity(EntitySyllable, 500, 400, EntitySyllable.getFire());

        var board = this.spawnEntity(EntitySyllableBoard, 200, 100, {
            boardSize: { x: 10, y: 10 },
            mage: "TODO"
        });
        board.getField(1,5).setAnim('Fire');

        board.placeSyllable(2,4, EntitySyllable.getShadow());
        board.placeSyllable(2,5, EntitySyllable.getSol());

        this.spawnEntity(EntitySpell, 600, 10, SpellDescriptions.ChainLightning);

		this.addSystem(SystemWidget);
	},

	update: function() {
		this.parent();

		// Add your own, additional update code here
	    this.sortEntitiesDeferred();
	},

	draw: function() {
		this.parent();

		// Add your own drawing code here
	}
});

});
