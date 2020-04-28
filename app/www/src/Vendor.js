// Public Variables and Functions

asteroidGravity = 400;
asteroidSpawnTime = 800;

playVisibility = false;
playVibration = true;
playShake = true;
playMusic = true;
playSound = true;
changeVolume = true;
appVolume = 1;
appMusic = null;

positionBtn = 1160;
positionTitle1 = 180;
positionTitle2 = 640;
positionTxtAbout = 440;
positionTxtGameStory = 580;

_fontStyle = {
	font: "40px SFDistantGalaxy",
	fill: "#FFFFFF",
	align: "center",
};

Vendor = {

	resetGame: function () {
		_score = 0; // 0 to 10
		_health = 7; // 6 energy cells + 1 to get dead after running out of energy cells
	},

	managePause: function () {
		var txtPause = game.add.text(game.world.centerX, 700, "TAP ON THE SCREEN\nTO CONTINUE", _fontStyle);
		btnPause.loadTexture('btn_play');
		game.paused = true;
		this.addCenterObject([txtPause]);
		game.input.onDown.add(function () {
			txtPause.destroy();
			btnPause.loadTexture('btn_pause');
			game.paused = false;
		}, );
	},

	adddPause: function () {
		btnPause = game.add.button(620, 110, 'btn_pause', this.managePause, this); // global var
	},

	addBackground: function (key) {
		bg = game.add.sprite(0, 0, key); // global var
	},

	addImage: function (x, y, key) {
		level = game.add.sprite(x, y, key); // global var
	},

	addSound: function (soundSFX) {
		if (playSound) {
			soundSFX.play();
		}
	},

	addSFX: function () {
		soundClick = game.add.audio('mp3_click', appVolume, false);
		soundExplode = game.add.audio('mp3_explosion', appVolume, false);
		soundDrop = game.add.audio('mp3_drop', appVolume, false);
	},

	addMusic: function (key, loop) {
		if (appMusic === null && playMusic) {
			appMusic = game.add.audio(key, appVolume, loop);
			appMusic.play();
		} else if (appMusic.key !== key && playMusic) {
			appMusic.stop();
			appMusic = game.add.audio(key, appVolume, loop);
			appMusic.play();
		};
	},

	addVibration: function () {
		if (playVibration) {
			navigator.vibrate([300, 25, 250, 25, 150]); // for Android only
		};
	},

	addButton: function (key, position, src) {
		var cacheImg = game.cache.getImage(key);
		var key = game.add.button(game.world.centerX - cacheImg.width / 2, position, key, function (e) {
			game.state.start(src);
			if (playSound) {
				soundClick.play();
			};
		});
	},

	addTitle: function (position, src) {
		var title = game.add.sprite(game.world.centerX, position, src);
		this.addCenterObject([title]);
	},

	addCenterObject: function (objects) {
		objects.forEach(function (object) {
			object.anchor.setTo(0.5, 0.5);
		})
	},

	addScore: function () {
		game.add.sprite(35, 25, 'score_bar');
		score1 = game.add.sprite(230, 45, 'score_icon');
		score2 = game.add.sprite(275, 45, 'score_icon');
		score3 = game.add.sprite(320, 45, 'score_icon');
		score4 = game.add.sprite(365, 45, 'score_icon');
		score5 = game.add.sprite(410, 45, 'score_icon');
		score6 = game.add.sprite(455, 45, 'score_icon');
		score7 = game.add.sprite(500, 45, 'score_icon');
		score8 = game.add.sprite(545, 45, 'score_icon');
		score9 = game.add.sprite(590, 45, 'score_icon');
		score10 = game.add.sprite(635, 45, 'score_icon');
	},

	addEnergy: function () {
		cell1 = game.add.sprite(305, 110, 'energy_cell_on');
		cell2 = game.add.sprite(355, 110, 'energy_cell_on');
		cell3 = game.add.sprite(405, 110, 'energy_cell_on');
		cell4 = game.add.sprite(455, 110, 'energy_cell_on');
		cell5 = game.add.sprite(505, 110, 'energy_cell_on');
		cell6 = game.add.sprite(555, 110, 'energy_cell_on');
	},

	updateScore: function () {
		var scoreBar = [score1, score2, score3, score4, score5, score6, score7, score8, score9, score10]; // from addScore
		var levels = "level_" + _score; // fisrt point loads "level_01" for example, no need to ajust array value 0
		scoreBar[_score - 1].loadTexture('score_icon_up'); // -1 to adjust to the first array value 0
		level.loadTexture(levels); // load img like Level: 1 until Level: 10
		if (_score === 10) {
			this.addButton('title_game_victory', positionTitle2, 'GameVictory');
			if (playMusic) {
				this.addMusic('mp3_game_victory', true);
			}
		};
	},

	updateEnergy: function () {
		var energyBar = [cell1, cell2, cell3, cell4, cell5, cell6]; // from addEnergy [0,1,2,3,4,5] = size 6
		if (_health === 0) {
			this.addButton('title_game_over', positionTitle2, 'GameOver');
			if (playMusic) {
				this.addMusic('mp3_game_over', true);
			};
		} else {
			energyBar[_health - 1].loadTexture('energy_cell_down'); // index of "_health" - 1 to ajust to size 6
		};
	},

	updateGravity: function () {
		game.physics.arcade.gravity.y += asteroidGravity;
	},

};

console.log("Vendor\t\tOK");