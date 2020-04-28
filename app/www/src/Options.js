GAME.Options = function () {};

GAME.Options.prototype = {

	preload: function () {
		this.optionCount = 1; // for the number of menu options
	},

	addMenuOption: function (content, callback) {

		var onUp = function (target) {
			target.fill = "#FFFFFF";
		};
		var onDown = function (target) {
			target.fill = "#f5ffd6";
		};
		var onOver = function (target) {
			target.fill = "#f5ffd6";
		};
		var onOut = function (target) {
			target.fill = "#FFFFFF";
		};

		var txt = game.add.text(game.world.centerX, (this.optionCount * 80) + 330, content, _fontStyle);

		Vendor.addCenterObject([txt]);

		txt.inputEnabled = true; // allows the user to click on the text (the "events" only works when it's true)
		txt.events.onInputUp.add(callback, this); // pointer PRESSED DOWN
		txt.events.onInputUp.add(onUp, this); // pointer PRESSED DOWN
		txt.events.onInputDown.add(onDown, this); // pointer PRESSED DOWN (but not yet released)
		txt.events.onInputOver.add(onOver, this); // pointer OVER the text
		txt.events.onInputOut.add(onOut, this); // pointer OUT of the text

		this.optionCount++; // creates the option for each addMenuOption
	},

	create: function () {

Vendor.addBackground('bg');
		Vendor.addMusic('mp3_options', true);
		Vendor.addTitle(positionTitle1, 'title_options');
		Vendor.addButton('btn_back', positionBtn, 'MainMenu');

		this.addMenuOption(asteroidGravity ? "GRAVITY " + asteroidGravity : "GRAVITY " + asteroidGravity, function (target) {
			if (asteroidGravity < 2000) {
				asteroidGravity += 200;
			} else {
				asteroidGravity = 200;
			};
			target.text = "GRAVITY " + asteroidGravity;
			console.log("Gravity\t\t" + asteroidGravity);
		});

		this.addMenuOption(asteroidSpawnTime ? 'SPAWN TIME ' + asteroidSpawnTime : 'SPAWN TIME ' + asteroidSpawnTime, function (target) {
			if (asteroidSpawnTime < 2000) {
				asteroidSpawnTime += 200;
			} else {
				asteroidSpawnTime = 200;
			};
			target.text = "SPAWN TIME " + asteroidSpawnTime;
			console.log("SpawnTime\t" + asteroidSpawnTime);
		});

		this.addMenuOption(playShake ? 'SCREEN SHAKE ON' : 'SCREEN SHAKE OFF', function (target) {
			playShake = !playShake;
			target.text = playShake ? 'SCREEN SHAKE ON' : 'SCREEN SHAKE OFF';
			playShake = playShake ? true : false;
			console.log("Shake\t\t" + playShake);
		});

		this.addMenuOption(playVisibility ? 'VISIBILITY ON' : 'VISIBILITY OFF', function (target) {
			playVisibility = !playVisibility;
			target.text = playVisibility ? 'VISIBILITY ON' : 'VISIBILITY OFF';
			playVisibility = playVisibility ? true : false;
			if (playVisibility) {
				game.stage.disableVisibilityChange = true;
			} else {
				game.stage.disableVisibilityChange = false;
			};
			console.log("Visibility\t" + playVisibility);
		});

		this.addMenuOption(playVibration ? 'VIBRATION ON' : 'VIBRATION OFF', function (target) {
			playVibration = !playVibration;
			target.text = playVibration ? 'VIBRATION ON' : 'VIBRATION OFF';
			playVibration = playVibration ? true : false;
			console.log("Vibration\t" + playVibration);
		});

		this.addMenuOption(playSound ? 'SOUND ON' : 'SOUND OFF', function (target) {
			playSound = !playSound;
			target.text = playSound ? 'SOUND ON' : 'SOUND OFF';
			playSound = playSound ? true : false;
			console.log("Sound\t\t" + playSound);
		});

		this.addMenuOption(playMusic ? 'MUSIC ON' : 'MUSIC OFF', function (target) {
			playMusic = !playMusic;
			target.text = playMusic ? 'MUSIC ON' : 'MUSIC OFF';
			playMusic = playMusic ? true : false;
			if (playMusic) {
				appMusic.play();
			} else {
				appMusic.stop();
			};
			console.log("Music\t\t" + playMusic);
		});

		this.addMenuOption(changeVolume ? 'VOLUME +' : 'VOLUME -', function (target) {
			changeVolume = !changeVolume;
			target.text = changeVolume ? 'VOLUME +' : 'VOLUME -';
			changeVolume = changeVolume ? true : false;
			if (changeVolume) {
				appVolume = 1;
			} else {
				appVolume = 0.3;
			};
			appMusic.volume = appVolume;
			soundClick.volume = appVolume;
			console.log("Volume\t\t" + appVolume);

		});

		console.log("Options\t\tOK");
	},

};