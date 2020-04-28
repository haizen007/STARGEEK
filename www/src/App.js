var game = new Phaser.Game(720, 1280, Phaser.AUTO, 'game');

GAME = {};

GAME.App = function () {};

GAME.App.prototype = {

	preload: function () {
		game.load.image('bg', 'assets/images/background.jpg');
		game.load.image('loading', 'assets/images/loading.png');
		game.load.image('logo', 'assets/images/logo.png');
		game.load.script('Vendor', 'src/Vendor.js'); // Public Variables and Functions
		game.load.script('Splash', 'src/Splash.js'); // Loads the Loading Screen
	},

	create: function () {
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.minWidth = 320;
		game.scale.minHeight = 568;
		game.scale.pageAlignHorizontally = true;
		game.scale.pageAlignVertically = true;
		this.shutdown();
	},

	shutdown: function () {
		game.state.add('Splash', GAME.Splash);
		game.state.start('Splash');
	},

};

game.state.add('App', GAME.App);
game.state.start('App');

console.log("App\t\tOK");