define(['./command'], function(Command) {
  var InitGame = Command.subclass({
    execute: function() {
      console.log(this.params);
    }
  });

  InitGame.prototype.className = 'InitGame';
  Command.addCommand(InitGame);

  return InitGame;
});
