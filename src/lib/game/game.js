ig.module(
	'game.game'
)
.requires(
	'impact.game',
	'impact.font',

	'game.entities.battle-field',
	'game.entities.info-text',
	'game.entities.spell',
	'game.entities.spell-list',
	'game.entities.syllable',
	'game.entities.syllable-board',
	'game.entities.syllable-selection',
	'game.entities.time-line',

	'game.levels.battle',

	'game.systems.widget',

	'impact.debug.debug'
)
.defines(function(){

var _SystemGame = ig.Game.extend({
	init: function() {
	    this.systems = [];
	},

	update: function() {
		// Update all entities and backgroundMaps
		this.parent();

		this.systems.forEach(function(system) {
		    system.update();
		}, this);
	},

	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();

		this.systems.forEach(function(system) {
		    system.draw();
		}, this);
	},

	addSystem: function(systemClass) {
	    var system = new (systemClass)();
	    this.systems.push(system);
	}
});

Onsetsu.Game = _SystemGame.extend({

	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),


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

        ([20, 30, 40, 50, 60, 70, 80]).forEach(function(xy) {
            var entity = this.spawnEntity(EntitySyllable, xy, xy, {});
            entity.onclick(function() {
                entity.vel.x += 1;
            });
        }, this);

		this.addSystem(SystemWidget);
	},

	update: function() {
		this.parent();

		// Add your own, additional update code here
	},

	draw: function() {
		this.parent();

		// Add your own drawing code here
		this.font.draw( 'It Works!', 0, 0, ig.Font.ALIGN.LEFT );
	}
});

});
