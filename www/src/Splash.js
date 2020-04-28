GAME.Splash = function () {};

GAME.Splash.prototype = {

	init: function () {
		this.status = this.make.text(this.world.centerX, 800, 'LOADING...', {
			fill: '#FFFFFF'
		});
		Vendor.addCenterObject([this.status]);
	},

	preload: function () {
		this.add.sprite(0, 0, 'bg');
		this.add.sprite(50, 400, 'logo')
		this.loadScripts();
		this.loadAudios();
		this.loadImages();
		this.loadFonts();
	},

	loadUpdate: function () {
		this.loadingBar = this.make.sprite(this.world.centerX - (578 / 2), 830, 'loading');
		this.add.existing(this.loadingBar);
		this.add.existing(this.status);
		this.load.setPreloadSprite(this.loadingBar);
	},

	loadScripts: function () {
		// Vendor.js is loaded into App.js to access all functions from the beginning
		this.load.script('WebFont', 'lib/webfontloader.js'); // necessary for custom fonts in WebFontConfig
		this.load.script('MainMenu', 'src/MainMenu.js');
		this.load.script('Game', 'src/Game.js');
		this.load.script('GameStory', 'src/GameStory.js');
		this.load.script('GameOver', 'src/GameOver.js');
		this.load.script('GameVictory', 'src/GameVictory.js');
		this.load.script('Options', 'src/Options.js');
		this.load.script('Credits', 'src/Credits.js');
		this.load.script('About', 'src/About.js');
		this.load.script('Asteroids', 'src/Asteroids.js');
	},

	loadAudios: function () {
		// Thanks to Kevin Macleod http://incompetech.com/
		this.load.audio('mp3_main_menu', 'assets/audios/main_menu.mp3');
		this.load.audio('mp3_game', 'assets/audios/game.mp3');
		this.load.audio('mp3_credits', 'assets/audios/credits.mp3');
		this.load.audio('mp3_options', 'assets/audios/options.mp3');
		this.load.audio('mp3_game_over', 'assets/audios/game_over.mp3');
		this.load.audio('mp3_game_victory', 'assets/audios/game_victory.mp3');
		this.load.audio('mp3_click', 'assets/audios/click.mp3');
		this.load.audio('mp3_explosion', 'assets/audios/explosion.mp3');
		this.load.audio('mp3_drop', 'assets/audios/drop.mp3');
	},

	loadImages: function () {
		// For the spritesheet set the size in px for W x H / number of images, exemple 8 asteroids and 5 explosions
		this.load.spritesheet('spritesheet_asteroids', 'assets/images/spritesheet_asteroids.png', 125, 125, 8);
		this.load.spritesheet('spritesheet_explosion', 'assets/images/spritesheet_explosion.png', 250, 240, 5);
		this.load.image('btn_main_menu', 'assets/images/btn_main_menu.png');
		this.load.image('btn_play_again', 'assets/images/btn_play_again.png');
		this.load.image('btn_start', 'assets/images/btn_start.png');
		this.load.image('btn_options', 'assets/images/btn_options.png');
		this.load.image('btn_credits', 'assets/images/btn_credits.png');
		this.load.image('btn_about', 'assets/images/btn_about.png');
		this.load.image('btn_next', 'assets/images/btn_next.png');
		this.load.image('btn_back', 'assets/images/btn_back.png');
		this.load.image('btn_play', 'assets/images/btn_play.png');
		this.load.image('btn_pause', 'assets/images/btn_pause.png');
		this.load.image('title_options', 'assets/images/title_options.png');
		this.load.image('title_about', 'assets/images/title_about.png');
		this.load.image('title_game_over', 'assets/images/title_game_over.png');
		this.load.image('title_game_victory', 'assets/images/title_game_victory.png');
		this.load.image('score_bar', 'assets/images/score_bar.png');
		this.load.image('score_icon', 'assets/images/score_icon.png');
		this.load.image('score_icon_up', 'assets/images/score_icon_up.png');
		this.load.image('energy_cell_on', 'assets/images/energy_cell_on.png');
		this.load.image('energy_cell_down', 'assets/images/energy_cell_down.png');
		this.load.image('level_0', 'assets/images/level_0.png');
		this.load.image('level_1', 'assets/images/level_1.png');
		this.load.image('level_2', 'assets/images/level_2.png');
		this.load.image('level_3', 'assets/images/level_3.png');
		this.load.image('level_4', 'assets/images/level_4.png');
		this.load.image('level_5', 'assets/images/level_5.png');
		this.load.image('level_6', 'assets/images/level_6.png');
		this.load.image('level_7', 'assets/images/level_7.png');
		this.load.image('level_8', 'assets/images/level_8.png');
		this.load.image('level_9', 'assets/images/level_9.png');
		this.load.image('level_10', 'assets/images/level_10.png');
	},

	loadFonts: function () {
		WebFontConfig = {
			custom: {
				families: ['SFDistantGalaxy'],
				urls: ['assets/style/fonts.css']
			}
		}
	},

	addGameSrc: function () {
		this.state.add("MainMenu", GAME.MainMenu);
		this.state.add("GameStory", GAME.GameStory);
		this.state.add("Game", GAME.Game);
		this.state.add("GameOver", GAME.GameOver);
		this.state.add("GameVictory", GAME.GameVictory);
		this.state.add("Options", GAME.Options);
		this.state.add("Credits", GAME.Credits);
		this.state.add("About", GAME.About);
	},

	create: function () {
		Vendor.addSFX();
		this.addGameSrc();
		this.start();
	},

	start: function () {
		setTimeout(function () {
			game.state.start("MainMenu");
		}, 1250);
		this.status.setText('DECODING AUDIOS...');
	},

};

console.log("Splash\t\tOK");