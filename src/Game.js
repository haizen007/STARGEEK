GAME.Game = function(game) {};

GAME.Game.prototype = {
	
	create: function () {
		Vendor.addBG('background');	
		Vendor.addMusic('main_menu', true);		
		var content =
		"TO SAVE THE EARTH\nYOU MUST CLICK ON THE\nASTEROIDS TO DESTROY THEM\n\n" +
		"IF THEY CRASH THE SCREEN\nBOTTOM YOU WILL LOSE YOUR\nFORCE FIELD EGERGY\n\n"+
		"YOU ONLY HAVE 6 ENERGY\nCELLS TO KEEP YOUR\nFORCE ACTIVATED\n\n"+
		"GOOD LUCK";		
		var story = game.add.text(game.world.centerX, txtGamePosition, content, _fontStyle);
		utils.centerGameObjects([story]);		
		Vendor.addBtn('next', btnPosition_01, 'Level_1');		
		// Vendor.addBtn('about', 1000, 'Level_1');
		// button = game.add.button('about', 1000, 'about', this.nukeButton, this, 0, 0, 0);
		console.log("Game\t\tOK");
	},
	
	// nukeButton : function() {
	
	// button.pendingDestroy = true;
	// btn.pendingDestroy = true;		
	// text = game.add.text(game.world.centerX, 1000, '- button nuked -', { font: '64px Arial', fill: '#ffffff' });
	// text.anchor.set(0.5);
	
	// },
	
};

Item = {
	
	spawnGame: function () {
		dropPos = Math.floor(Math.random() * GAME_WIDTH);
		dropOffset = [];
		asteroidType = Math.floor(Math.random() * 8);
		asteroid = game.add.sprite(dropPos, dropOffset[asteroidType], 'asteroids');		
		asteroid.animations.add('anim', [asteroidType], 10, true);
		asteroid.animations.play('anim');
		game.physics.enable(asteroid, Phaser.Physics.ARCADE);
		asteroid.inputEnabled = true;
		asteroid.events.onInputDown.add(this.clickAsteroid, this);
		asteroid.checkWorldBounds = true;
		asteroid.events.onOutOfBounds.add(this.removeAsteroid, this);
		asteroid.anchor.setTo(0.5, 0.5);
		asteroid.rotateMe = (Math.random() * 4) - 2;
		asteroidGroup.add(asteroid);
	},
	
	clickAsteroid: function (asteroid) {
		asteroid.kill();
		this.addExplosion(asteroid);
		_score += 1;
		this.updateScore();
		if (playSound) {
			sfx_Explode.play();
		};
		if (_score === 10 && playMusic) {
			Vendor.addMusic('game_victory', true);			
		};
	},
	
	addExplosion : function (asteroid) {
		explosion = game.add.sprite(asteroid.world.x, asteroid.world.y, 'explosion');
		explosion.checkWorldBounds = true;
		explosion.anchor.setTo(0.5, 0.5);
		explosion.rotateMe = (Math.random() * 4) - 2;
		explosion.animations.add('explode');
		explosion.animations.play('explode', 35, true);
		game.add.tween(explosion).to({alpha: 0}, 1000, Phaser.Easing.Cubic.Out, true, 200);		
	},
	
	removeAsteroid: function (asteroid) {
	asteroid.kill();
	_health -= 1;
	Vendor.addShake();
	this.updateLife();
	if (playVibration) {
		navigator.vibrate([300, 25, 250, 25, 150]); // for Android
	};
	if (playSound) {
		sfx_Drop.play();
	};
	if (_health === 0 && playMusic) {
		// btn01.pendingDestroy = true;
		Vendor.addMusic('game_over', true);
	};
	},
	
	updateScore: function () {
		var scores = [ponto01, ponto02, ponto03, ponto04, ponto05, ponto06, ponto07, ponto08, ponto09, ponto10]; // size 9
		var levels = "level_"+_score;	// var to control the level key
		if (_score === 10) {
			scores[_score-1].loadTexture('score_icon_up');	// -1 to adjust to the max array size = 9
			level.loadTexture(levels);	// to load the new texture of the existing level (addLevel) based on the key "level_X"
			Vendor.addBtn('title_game_victory', titlePosition_02, 'GameVictory');
			} else {
			scores[_score-1].loadTexture('score_icon_up');	// -1 to adjust to the max array size = 9
			level.loadTexture(levels);
		};
	},
	
	updateLife: function () {
		var lifes = [vida01, vida02, vida03, vida04, vida05, vida06];	//	[0,1,2,3,4,5] = size 6
		if (_health === 0) {
			lifes[_health].loadTexture('life_dead');			
			Vendor.addBtn('title_game_over', titlePosition_02, 'GameOver');
			} else {			
			lifes[_health].loadTexture('life_dead');	// it loads the img "life_dead" by the index of "lifes" [0 to 5] based on "_health" value 
		};
	},
	
};		