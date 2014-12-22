define(['./command'], function(Command) {
  var Say = Command.subclass({
    execute: function() {
      console.log(this.params.who + ': ' + this.params.says);
    }
  });

  Say.prototype.className = 'Say';
  Command.addCommand(Say);

  return Say;
});
