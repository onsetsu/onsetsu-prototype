ig.module(
	'game.systems.widget'
)
.requires(
	'game.systems.system'
)
.defines(function(){

function hovered(entity) {
    if(ig.input.mouse.x < entity.pos.x) return false;
    if(ig.input.mouse.y < entity.pos.y) return false;
    if(ig.input.mouse.x > entity.pos.x + entity.size.x) return false;
    if(ig.input.mouse.y > entity.pos.y + entity.size.y) return false;
    return true;
}

SystemWidget = System.extend({
	init: function(game) {
	    this.parent(game);
	},

	update: function(game) {
		this.parent(game);

		if(ig.input.pressed('leftclick')) {
		    var clickedEntity, zIndex;

		    game.entities.forEach(function(entity) {
                if(hovered(entity)) {
                    if(!clickedEntity) {
                        clickedEntity = entity;
                    }
                    if(clickedEntity.zIndex <= entity.zIndex) {
                        clickedEntity = entity;
                    }
                }
		    });

		    if(clickedEntity && clickedEntity.click) {
		        clickedEntity.click();
		    }
		}
	}
});

});
