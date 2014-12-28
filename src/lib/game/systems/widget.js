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

SystemWidget = System.extend({
	beforeUpdate: function() {
		this.parent();

		if(ig.input.pressed('leftclick')) {
		    var clickedEntity;

		    ig.game.entities.forEach(function(entity) {
                if(hovered(entity)) {
                    if(!clickedEntity) {
                        clickedEntity = entity;
                    }
                    if(clickedEntity.zIndex <= entity.zIndex) {
                        clickedEntity = entity;
                    }
                }
		    }, this);

            if(clickedEntity && clickedEntity.click) {
                clickedEntity.click();
            }
		}
	}
});

});
