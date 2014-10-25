define(['./command'], function(Command) {
  var InitGame = Command.subclass({
    execute: function() {

    }
  });

  InitGame.className = 'InitGame';
  Command.addCommand(InitGame);

  return InitGame;
});
