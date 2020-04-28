GAME.Splash = function (game) {};

GAME.Splash.prototype = {
	
	loadScripts: function () {
		this.load.script('style', 'lib/style.js');
		this.load.script('mixins', 'lib/mixins.js');
		this.load.script('WebFont', 'lib/webfontloader.js');
		this.load.script('Vendor', 'src/Vendor.js');
		this.load.script('MainMenu','src/MainMenu.js');
		this.load.script('Game', 'src/Game.js');
		this.load.script('GameOver','src/GameOver.js');
		this.load.script('GameVictory','src/GameVictory.js');
		this.load.script('Options', 'src/Options.js');
		this.load.script('Credits', 'src/Credits.js');
		this.load.script('About', 'src/About.js');
		this.load.script('Level_1', 'src/Level_1.js');
	},
	
	// loadAudios: function () {
		// // thanks Kevin Macleod at http://incompetech.com/
		// this.load.audio('main_menu', 	[ 'asset/audios/main_menu.ogg' 		]);
		// this.load.audio('game', 		[ 'asset/audios/game.ogg'			]);
		// this.load.audio('credits', 		[ 'asset/audios/credits.ogg'		]);
		// this.load.audio('options', 		[ 'asset/audios/options.ogg' 		]);
		// this.load.audio('game_over', 	[ 'asset/audios/game_over.ogg'		]);
		// this.load.audio('game_victory', [ 'asset/audios/game_victory.ogg' 	]);
		// this.load.audio('click', 		[ 'asset/audios/click.ogg'			]);
		// this.load.audio('explosion', 	[ 'asset/audios/explosion.ogg'		]);
		// this.load.audio('drop', 		[ 'asset/audios/drop.ogg' 			]);
	// },
	
	loadAudios: function () {
		// thanks Kevin Macleod at http://incompetech.com/
		this.load.audio('main_menu', 	[ 'asset/audios/main_menu.ogg', 	'asset/audios/main_menu.mp3' 	]);
		this.load.audio('game', 		[ 'asset/audios/game.ogg', 			'asset/audios/game.mp3' 		]);
		this.load.audio('credits', 		[ 'asset/audios/credits.ogg', 		'asset/audios/credits.mp3' 		]);
		this.load.audio('options', 		[ 'asset/audios/options.ogg', 		'asset/audios/options.mp3' 		]);
		this.load.audio('game_over', 	[ 'asset/audios/game_over.ogg', 	'asset/audios/game_over.mp3' 	]);
		this.load.audio('game_victory', [ 'asset/audios/game_victory.ogg', 	'asset/audios/game_victory.mp3' ]);
		this.load.audio('click', 		[ 'asset/audios/click.ogg', 		'asset/audios/click.mp3' 		]);
		this.load.audio('explosion', 	[ 'asset/audios/explosion.ogg', 	'asset/audios/explosion.mp3' 	]);
		this.load.audio('drop', 		[ 'asset/audios/drop.ogg', 			'asset/audios/drop.mp3' 		]);
	},
	
	loadImages: function () {
		this.load.spritesheet('asteroids', 'asset/images/asteroids.png', 127, 133, 8);
		this.load.spritesheet('explosion', 'asset/images/explosion.png', 175, 175, 4);
		this.load.image('main_menu', 'asset/images/main_menu.png');
		this.load.image('start', 'asset/images/start.png');
		this.load.image('options', 'asset/images/options.png');
		this.load.image('credits', 'asset/images/credits.png');
		this.load.image('about', 'asset/images/about.png');
		this.load.image('title_options', 'asset/images/title_options.png');
		this.load.image('title_about', 'asset/images/title_about.png');
		this.load.image('title_game_over', 'asset/images/title_game_over.png');
		this.load.image('title_game_victory', 'asset/images/title_game_victory.png');
		this.load.image('play_again', 'asset/images/play_again.png');
		this.load.image('next', 'asset/images/next.png');
		this.load.image('back', 'asset/images/back.png');
		this.load.image('play', 'asset/images/play.png');
		this.load.image('pause', 'asset/images/pause.png');
		this.load.image('score', 'asset/images/score.png');
		this.load.image('score_icon', 'asset/images/score_icon.png');
		this.load.image('score_icon_up', 'asset/images/score_icon_up.png');
		this.load.image('life', 'asset/images/life.png');
		this.load.image('life_dead', 'asset/images/life_dead.png');
		this.load.image('level_0', 'asset/images/level_0.png');
		this.load.image('level_1', 'asset/images/level_1.png');
		this.load.image('level_2', 'asset/images/level_2.png');
		this.load.image('level_3', 'asset/images/level_3.png');
		this.load.image('level_4', 'asset/images/level_4.png');
		this.load.image('level_5', 'asset/images/level_5.png');
		this.load.image('level_6', 'asset/images/level_6.png');
		this.load.image('level_7', 'asset/images/level_7.png');
		this.load.image('level_8', 'asset/images/level_8.png');
		this.load.image('level_9', 'asset/images/level_9.png');
		this.load.image('level_10', 'asset/images/level_10.png');
	},
	
	loadFonts: function () {
		WebFontConfig = {
			custom: {
				families: ['SFDistantGalaxy'],
				urls: ['asset/style/fonts.css']
			}
		}
	},
	
	addGameSrc: function () {
		this.state.add("MainMenu", GAME.MainMenu);
		this.state.add("Game", GAME.Game);
		this.state.add("GameOver", GAME.GameOver);
		this.state.add("GameVictory", GAME.GameVictory);
		this.state.add("Options", GAME.Options);
		this.state.add("Credits", GAME.Credits);
		this.state.add("About", GAME.About);
		this.state.add("Level_1", GAME.Level_1);
	},
	
	init: function () {
		this.status = this.make.text(this.world.centerX, 800, 'LOADING...', {fill: 'white'});
		utils.centerGameObjects([this.status]);		
	},
	
	preload: function () {
		this.add.sprite(0, 0, 'background');		
		this.add.sprite(50, 400, 'logo')		
		this.loadScripts();
		this.loadAudios();
		this.loadImages();
		this.loadFonts();
	},
	
	loadUpdate: function () {
		this.loadingBar = this.make.sprite(this.world.centerX-(578/2), 830, 'loading');		
		this.add.existing(this.loadingBar);
		this.add.existing(this.status);
		this.load.setPreloadSprite(this.loadingBar);
	},
	
	create: function () {
		this.addGameSrc();
		Vendor.addMusic('main_menu', true);
		Vendor.addSound();	//reload sounds everytime with the right volume
		sfx_Click.volume = 0;
		sfx_Click.play();
		this.start();		
	},
	
	start: function () {
		setTimeout(function () {
			game.state.start("MainMenu");
		}, 1250);
		this.status.setText('DECODING AUDIOS...');		
		console.log("Splash\t\tOK");
	},
	
};

// update: function () {
// if (game.cache.isSoundReady('click', 'main_menu')) {
// this.startMenu();
// } else {
// this.status.setText('DECODING AUDIOS...');
// };
// },

// create: function () {
// this.addAudios();
// this.addGameSrc();	
// },

// create: function () {
// this.addGameSrc();
// this.status.setText('READY');
// setTimeout(function () {
// game.state.start("MainMenu");
// }, 250);
// console.log("Splash\t\tOK");
// },

// update: function () {
// if (game.cache.isSoundDecoded('main_menu', 'game', 'credits', 'options', 
// 'game_over', 'game_victory', 'click', 'explosion', 'drop')) {
// this.addGameSrc();
// this.status.setText('READY');
// setTimeout(function () {
// game.state.start("MainMenu");
// }, 0);
// console.log("Splash\t\tOK");
// };
// },