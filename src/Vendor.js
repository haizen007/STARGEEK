// gobal var
VisibilityChange 	= false;
playVibration 		= true;
playMusic 			= true;
playSound 			= true;
playVolume 			= true;
volumeApp 			= 1;
music 				= null;
// bg 					= null;

GAME_WIDTH 			= 720;
GAME_HEIGHT 		= 1280;

btnPosition_01 		= (GAME_HEIGHT - 120);
titlePosition_01 	= (GAME_HEIGHT - 1100);
titlePosition_02	= (GAME_HEIGHT - 690);
aboutPosition 		= (GAME_HEIGHT - 840);
txtGamePosition 	= (GAME_HEIGHT - 700);
txtVersion 			= "1.6.2";

_fontStyle = {
	font: "40px SFDistantGalaxy",
	fill: "#FFF",
	stroke: "#FEFFD5",
	strokeThickness: 0,
	align: "center",
};	

Vendor = {
	
	resetGame: function () {
		_score 	= 0;
		_health = 6;		
	},
	
	managePause: function () {
		game.paused = true;
		btnPause.loadTexture('play');
		var pauseTxt = game.add.text(115, 600, "TAP ON THE SCREEN\nTO CONTINUE", _fontStyle);
		game.input.onDown.add(function () {
			pauseTxt.destroy();
			game.paused = false;
			btnPause.loadTexture('pause');
		}, this);
	},
	
	addSound: function () {
		sfx_Click 		= game.add.audio('click', volumeApp, false);
		sfx_Explode 	= game.add.audio('explosion', volumeApp, false);
		sfx_Drop 		= game.add.audio('drop', volumeApp, false);
	},
	
	addMusic: function (key, loop) {
		if (music === null && playMusic) {
			music = game.add.audio(key, volumeApp, loop);
			music.play();		
		}
		else if (music.name !== key && playMusic) {
			music.stop();
			music = game.add.audio(key, volumeApp, loop);
			music.play();
		};
	},
	
	addBtn: function (name, position, src) {
		var cacheImg = game.cache.getImage(name);
		btn = game.add.button(game.world.centerX - cacheImg.width/2, position, name, function (e)  {
			if (playSound) {
				sfx_Click.play();
			};
			game.state.start(src);
		});
	},
	
	addBtnName: function (name, position, src, btnName) {
		var cacheImg = game.cache.getImage(name);
		btnName = game.add.button(game.world.centerX - cacheImg.width/2, position, name, function (e)  {
			if (playSound) {
				sfx_Click.play();
			};
			game.state.start(src);
		});
	},
	
	addTitle: function (position, src) {
		var title = game.add.sprite(game.world.centerX, position, src);
		utils.centerGameObjects([title]);
	},
	
	addScore: function () {
		game.add.sprite(35, 25, 'score');
		ponto01 = game.add.sprite(230, 45, 'score_icon');
		ponto02 = game.add.sprite(275, 45, 'score_icon');
		ponto03 = game.add.sprite(320, 45, 'score_icon');
		ponto04 = game.add.sprite(365, 45, 'score_icon');
		ponto05 = game.add.sprite(410, 45, 'score_icon');
		ponto06 = game.add.sprite(455, 45, 'score_icon');
		ponto07 = game.add.sprite(500, 45, 'score_icon');
		ponto08 = game.add.sprite(545, 45, 'score_icon');
		ponto09 = game.add.sprite(590, 45, 'score_icon');
		ponto10 = game.add.sprite(635, 45, 'score_icon');
	},
	
	addLife: function () {
		vida01 = game.add.sprite(305, 110, 'life');
		vida02 = game.add.sprite(355, 110, 'life');
		vida03 = game.add.sprite(405, 110, 'life');
		vida04 = game.add.sprite(455, 110, 'life');
		vida05 = game.add.sprite(505, 110, 'life');
		vida06 = game.add.sprite(555, 110, 'life');
	},	
	
	addLevel: function (levelName) {
		level = game.add.sprite(35, 110, levelName);
	},	
	
	adddPause: function () {
		btnPause = game.add.button(620, 110, 'pause', this.managePause, this);
	},	
	
	addBG: function (name) {
		bg = game.add.sprite(0, 0, name);
	},
	
	addShake: function () {
		// Shake the background by moving it up and down 5 times really fast
		game.add.tween(bg)
		.to({
			y: -13
		}, 80, Phaser.Easing.Sinusoidal.InOut, false, 0, 5, true)
		.start();
	},
};