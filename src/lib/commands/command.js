define([], function() {
  var Command = mini.Class.subclass({
    initialize: function(params) {
      this.params = params;
    },
    execute: function() {
      throw 'execute not overwritten';
    }
    executeAndDistribute: function() {
      this.execute();
    }

  });

  Command.commands = {};
  Command.addCommand = function(command) {
    Command.commands[command.className] = command;
  };

  Command.className = 'Command';
  Command.addCommand(Command);

  return Command;
});
