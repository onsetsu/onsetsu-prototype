define([], function() {
  var Command = mini.Class.subclass({
    initialize: function(params) {
      this.params = params;
    },
    execute: function() {
      throw 'execute not overwritten';
    },
    executeAndDistribute: function() {
      this.execute();
      this.distribute();
    },
    distribute: function() {
      env.conn.send({
        command: this.className,
        params: this.params
      });
    }
  });

  Command.commands = {};
  Command.addCommand = function(command) {
    Command.commands[command.prototype.className] = command;
  };

  Command.className = 'Command';
  Command.addCommand(Command);

  return Command;
});
