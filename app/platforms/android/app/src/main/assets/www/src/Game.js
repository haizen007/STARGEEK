GAME.Game = function () {};

GAME.Game.prototype = {

	create: function () {

		Vendor.resetGame();
		Vendor.addBackground('bg');
		Vendor.addMusic('mp3_game', true);
		Vendor.adddPause();
		Vendor.addScore();
		Vendor.addEnergy();
		Vendor.addImage(35, 110, 'level_0');
		this.physics.startSystem(Phaser.Physics.ARCADE);
		this.spawnTime = 0;
		this.physics.arcade.gravity.y = asteroidGravity;
		asteroidGroup = this.add.group(); // creates a group of asteroids also used in Asteroids.js
		console.log("Game\t\tOK");

	},

	update: function () {

		asteroidGroup.forEach(function (asteroid) {
			asteroid.angle += asteroid.rotateMe;
		});
		this.spawnTime += this.time.elapsed;
		if (this.spawnTime > asteroidSpawnTime) { // delay in milliseconds for the next asteroid
			this.spawnTime = 0;
			Asteroids.spawnAsteroid(this); // calls a new asteroid from Asteroids.js
		};
		if (_health === 0 || _score === 10) {
			asteroidGroup.destroy();
			btnPause.inputEnabled = false; // disable pause
		};

	},

};