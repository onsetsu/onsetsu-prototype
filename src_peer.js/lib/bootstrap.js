require(['./commands/command', './commands/initgame', './commands/say'], function(Command, InitGame, Say) {
  if(typeof env === 'undefined') {
    env = {};
  }
  var datGui;

  window.chat = function(message) {
    (new Say({
      who: env.peer.id,
      says: message
    })).executeAndDistribute();
  };

  function prepareOpenedConnection() {
    console.log('connection established');

    // Receive messages
    env.conn.on('data', function(data) {
      (new (Command.commands[data.command])(data.params)).execute();
    });
  };

  // creates a new peer and sets up its disconnection gui
  function createPeer() {
    var peer = new Peer({key: 'klgy15uvondpwrk9'}),
      disconnectDatGui = new dat.GUI(),
      discon = disconnectDatGui.add(peer, 'disconnect');
    disconnectDatGui.add(peer, 'destroy');

    peer.on('disconnected', function() {
      console.log('peer disconnected');
      disconnectDatGui.remove(discon);
    });
    peer.on('close', function() {
      console.log('peer destroyed');
      disconnectDatGui.destroy();
    });

    return peer;
  };

  // Client: join game
  var join = {
    'game id': 'Game ID',
    join: function() {
      datGui.destroy();

      console.log('try to join game', join['game id']);
      var peer = env.peer = createPeer();
      var conn = env.conn = peer.connect(join['game id']);
      conn.on('open', function() {
        prepareOpenedConnection();
      });
    },
    init: function() {
      datGui = new dat.GUI();
      datGui.add(join, 'game id');
      datGui.add(join, 'join');
    }
  };

  // Host side
  var host = {
    init: function() {
      datGui.destroy();

      var peer = env.peer = createPeer();

      peer.on('open', function(id) {
        console.log('My peer ID is: ' + id);
      });

      peer.on('connection', function(conn) {
        env.conn = conn;
        conn.on('open', function() {
          prepareOpenedConnection();
          chat('Hi, Client');
        });
      });
    }
  };

  // Host: choose game mode
  var gameMode = {
    parameters: {
      sharedBoard: false,
      orderOfTurns: 'simultaneously',
      '#syllablesPerTurn': 'one',
      executionOfSpells: 'immediately',
      fullBoardProblem: 'wipe',
      enemyBoardVisible: 'fully visible',
      SP: {
        useSP: true,
        startValue: 0,
        decay: true, // sp from previous turn decay
        increasePerTurn: 0,
        increaseIncrease: 1,
        maxIncrease: 10,
        maxSP: 1000,
        SPBurnAt: 1000
      },
      'syllables switchable': true,
      'cascade includes smaller spells': false,
      actingInEnemiesTurn: {},
      'symmetric fights': true,
      'summonings': 'as central element',
      'S-RPG Map': false
    },
    init: function() {
      var params = gameMode.parameters,
        sp = params.SP;

      datGui = new dat.GUI();
      datGui.add(host, 'init');
      datGui.add(params, 'sharedBoard');
      datGui.add(params, 'orderOfTurns', ['simultaneously', 'one after another', 'gungnir ctb']);
      datGui.add(params, '#syllablesPerTurn', ['one', 'arbitrary']);
      datGui.add(params, 'executionOfSpells', ['immediately', 'at the end of turn']);
      datGui.add(params, 'fullBoardProblem', ['wipe', 'bad luck', 'remove non-adjacent syllables']);
      datGui.add(params, 'enemyBoardVisible', ['fully visible', 'only locations', 'completly hidden']);
      var spFolder = datGui.addFolder('SP');
      spFolder.add(sp, 'useSP');
      spFolder.add(sp, 'startValue');
      spFolder.add(sp, 'decay');
      spFolder.add(sp, 'increasePerTurn');
      spFolder.add(sp, 'increaseIncrease');
      spFolder.add(sp, 'maxIncrease');
      spFolder.add(sp, 'maxSP');
      spFolder.add(sp, 'SPBurnAt');
      spFolder.open();
      datGui.add(params, 'syllables switchable');
      datGui.add(params, 'cascade includes smaller spells');
      datGui.addFolder('enemy turn');
      datGui.add(params, 'symmetric fights');
      datGui.add(params, 'summonings', ['no', 'only in higher circles', 'as central element']);
      datGui.add(params, 'S-RPG Map')
    }
  };

  var hostJoin = {
    'host game': function() {
      datGui.destroy();
      gameMode.init();
    },
    'join game': function() {
      datGui.destroy();
      join.init();
    },
    init: function() {
      datGui = new dat.GUI();
      datGui.add(hostJoin, 'host game');
      datGui.add(hostJoin, 'join game');
    }
  };

  hostJoin.init();
});
