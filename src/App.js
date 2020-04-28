var game = new Phaser.Game(720, 1280, Phaser.AUTO, 'game');

GAME = {};

GAME.App = function (game) {};

GAME.App.prototype = {
	
	preload: function () {
		game.load.image('background', 'asset/images/background.jpg');
		game.load.image('loading', 'asset/images/loading.png');
		game.load.image('logo', 'asset/images/logo.png');
		game.load.script('utils', 'lib/utils.js');
		game.load.script('Splash', 'src/Splash.js');
	},
	
	create: function () {	
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.minWidth = 360;
		game.scale.minHeight = 640;
		game.scale.maxWidth = 540;
		game.scale.maxHeight = 960;
		game.scale.forceLandscape = true;
		game.scale.pageAlignHorizontally = true;
		game.scale.pageAlignVertically = true;
		console.log("App\t\tOK");
		this.shutdown();
	},
	
	shutdown: function () {
		game.state.add('Splash', GAME.Splash);
		game.state.start('Splash');
	},
	
};

game.state.add('App', GAME.App);
game.state.start('App');
