GAME.Level_1 = function(game) {};

GAME.Level_1.prototype = {
	
	create: function () {
		Vendor.addBG('background');
		this.physics.startSystem(Phaser.Physics.ARCADE);
        gravity = this.physics.arcade.gravity.y = 100;
        this._spawngameTimer = 0;
		Vendor.addMusic('game', true);
		Vendor.addScore();
		Vendor.addLife();
		Vendor.addLevel('level_0');
		Vendor.adddPause();
		Vendor.addBtnName('main_menu', btnPosition_01, 'MainMenu', 'btn01');
		console.log("Level_1\t\tOK");	
		asteroidGroup = this.add.group();	

	},
	
	update: function () {
		this._spawngameTimer += this.time.elapsed;		
		if (this._spawngameTimer > 2000) {
			this._spawngameTimer = 0;
			Item.spawnGame(this);
		};
		asteroidGroup.forEach(function (asteroid) {
			asteroid.angle += asteroid.rotateMe;
		});
		if ( _health === 0 || _score === 10) {
			asteroidGroup.destroy();
		}
		if (_score === 1) {
			game.physics.arcade.gravity.y = 700;
		}
		else if (_score === 2) {
			game.physics.arcade.gravity.y = 1000;
		}
		else if (_score === 3) {
			game.physics.arcade.gravity.y = 1300;
		}
		else if (_score === 4) {
			game.physics.arcade.gravity.y = 1600;
		}
		else if (_score === 5) { 
			game.physics.arcade.gravity.y = 1900;
		}
		else if (_score === 6) { 
			game.physics.arcade.gravity.y = 2200;
		}
		else if (_score === 7) {
			game.physics.arcade.gravity.y = 2500;
		}
		else if (_score === 8) { 
			game.physics.arcade.gravity.y = 2800;
		}
		else if (_score === 9) {
			game.physics.arcade.gravity.y = 3100;
		};
	},
	
};	