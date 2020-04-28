GAME.Options = function(game) {};

GAME.Options.prototype = {
	
	preload: function () {
		this.optionCount = 1;
	},
	
	addMenuOption: function(text, callback) {
		var optionStyle = { font: '30pt SFDistantGalaxy', fill: 'white', align: 'left', stroke: 'rgba(0,0,0,0)', srokeThickness: 4};
		var txt = game.add.text(game.world.centerX, (this.optionCount * 80) + 360, text, optionStyle);
		txt.anchor.setTo(0.5);
		var onOver = function (target) {
			target.fill = "white";
			target.stroke = "rgba(0,0,0,0)";
			txt.useHandCursor = true;
		};
		var onOut = function (target) {
			target.fill = "white";
			target.stroke = "rgba(0,0,0,0)";
			txt.useHandCursor = false;
		};
		txt.inputEnabled = true;
		txt.events.onInputUp.add(callback, this);
		txt.events.onInputOver.add(onOver, this);
		txt.events.onInputOut.add(onOut, this);		
		this.optionCount ++;
	},
	
	//	http://www.html5gamedevs.com/topic/12375-volume-controls-for-music-and-sound-effects/
	
	create: function () {
		Vendor.addBG('background');		
		Vendor.addMusic('options', true);
		Vendor.addTitle(titlePosition_01, 'title_options');
		Vendor.addBtn('back', btnPosition_01, 'MainMenu');
		
		this.addMenuOption(playVibration ? 'VIBRATION OFF' : 'VIBRATION ON', function (target) {
			playVibration = !playVibration;
			target.text = playVibration ? 'VIBRATION OFF' : 'VIBRATION ON';
			playVibration = playVibration ? true : false;
			if(playVibration){
				console.log("Vibration\tTRUE");
				} else {
				console.log("Vibration\tFALSE");
			};
		});
		
		this.addMenuOption(VisibilityChange ? 'VISIBILITY OFF' : 'VISIBILITY ON', function (target) {
			VisibilityChange = !VisibilityChange;
			target.text = VisibilityChange ? 'VISIBILITY OFF' : 'VISIBILITY ON';
			VisibilityChange = VisibilityChange ? true : false;
			if(VisibilityChange){
				game.stage.disableVisibilityChange = true;
				console.log("Visibility\tTRUE");
				} else {
				game.stage.disableVisibilityChange = false;
				console.log("Visibility\tFALSE");
			};
		});
		
		this.addMenuOption(playSound ? 'SOUND OFF' : 'SOUND ON', function (target) {
			playSound = !playSound;
			target.text = playSound ? 'SOUND OFF' : 'SOUND ON';
			playSound = playSound ? true : false;
			if(playSound){
				console.log("Sound\t\tTRUE");
				} else {
				console.log("Sound\t\tFALSE");
			};
		});
		
		this.addMenuOption(playMusic ? 'MUSIC OFF' : 'MUSIC ON', function (target) {
			playMusic = !playMusic;
			target.text = playMusic ? 'MUSIC OFF' : 'MUSIC ON';
			playMusic = playMusic ? true : false;
			if(playMusic){
				music.play();
				console.log("Music\t\tTRUE");
				} else {
				music.stop();
				console.log("Music\t\tFALSE");
			};
		});
		
		this.addMenuOption(playVolume ? 'VOLUME -' : 'VOLUME +', function (target) {
			playVolume = !playVolume;
			target.text =  playVolume ? 'VOLUME -' : 'VOLUME +';
			playVolume = playVolume ? true : false;
			if(playVolume){
				volumeApp = 1;
				music.volume = 1;
				sfx_Click.volume = 1;
				console.log("Volume\t\t+");
				} else {
				volumeApp = 0.3;
				music.volume = 0.3;
				sfx_Click.volume = 0.3;
				console.log("Volume\t\t-");
			};
		});
		
		console.log("Options\t\tOK");		
	},
};				