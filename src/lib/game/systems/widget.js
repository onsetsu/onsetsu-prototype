ig.module(
	'game.systems.widget'
)
.requires(
	'game.systems.system',
	'impact.impact'
)
.defines(function(){

function hovered(entity) {
    if(ig.input.mouse.x < entity.pos.x) return false;
    if(ig.input.mouse.y < entity.pos.y) return false;
    if(ig.input.mouse.x > entity.pos.x + entity.size.x) return false;
    if(ig.input.mouse.y > entity.pos.y + entity.size.y) return false;
    return true;
}

var StrategyStartInteraction = ig.Class.extend({
    init: function() {

    }
});

var leftclick = 'leftclick';

SystemWidget = System.extend({
	init: function() {
	    this.parent();

	    systemWidget = this;
	},

	beforeUpdate: function() {
		this.parent();

		if(ig.input.pressed(leftclick)) {
		    ig.game.entities.forEach(function(entity) {
                if(hovered(entity)) {
                    if(!this.entity) {
                        this.mouse = {
                            x: ig.input.mouse.x,
                            y: ig.input.mouse.y
                        }
                        this.entity = entity;
                        this.clickingBehaviour = true;
                    }
                    if(this.entity.zIndex <= entity.zIndex) {
                        this.entity = entity;
                    }
                }
		    }, this);
		}
		if(ig.input.released(leftclick)) {
		    if(this.clickingBehaviour) {
                if(this.entity && this.entity.click) {
                    this.entity.click();
                }
		    }
		}
		if(ig.input.state(leftclick) && this.entity) {
		    if(
		        !this.mouse ||
                this.mouse.x != ig.input.mouse.x ||
                this.mouse.y != ig.input.mouse.y
            ) {
                if(this.clickingBehaviour) {
                    this.clickingBehaviour = false;
                } else {
                    this.entity.pos.x += ig.input.mouse.x - this.mouse.x;
                    this.entity.pos.y += ig.input.mouse.y - this.mouse.y;
                    this.mouse.x = ig.input.mouse.x;
                    this.mouse.y = ig.input.mouse.y;
                }
		    }
		} else {
            this.entity = undefined;
            this.mouse = undefined;
            this.clickingBehaviour = false;
		}
	}
});

});
