GAME.About = function(game) {};

GAME.About.prototype = {
	
	// preload: function () {
	// this.creditCount = 500;		
	// },
	
	// addCredit: function(task, author) {
	// var authorStyle = { font: '40pt SFDistantGalaxy', fill: 'white', align: 'center'};
	// var taskStyle = { font: '30pt SFDistantGalaxy', fill: 'white', align: 'center'};
	// var authorText = game.add.text(game.world.centerX, this.creditCount, author, authorStyle);
	// var taskText = game.add.text(game.world.centerX, this.creditCount, task, taskStyle);
	// authorText.anchor.setTo(0.5);
	// taskText.anchor.setTo(0.5);
	// this.creditCount = this.creditCount+50;
	// },
	
	create: function () {
		// this.addCredit('DEVELOPER', 'YONATHAN STEIN');
		// this.addCredit('PHASER.IO', 'POWERED BY');
		Vendor.addBG('background');
		Vendor.addMusic('options', true);
		Vendor.addTitle(titlePosition_01, 'title_about');
		Vendor.addBtn('back', btnPosition_01, 'MainMenu');
		this.addAboutTxt();
		console.log("About\t\tOK");
	},
	
	addAboutTxt: function () {
		// var a = "about01";
		// var b = "about02";
		// var c = "about03";
		// var d = "about04";
		// for (i = 1; i < 5; i++ ) {
			// var about0i = game.add.text(game.world.centerX, aboutPosition, "Version\n1.5.9.1", _fontStyle);
			// aboutPosition = aboutPosition+140;
			// console.log(i);
			// console.log(about0i == a);
		// };
		var about01 = game.add.text(game.world.centerX, aboutPosition, "VERSION\n"+txtVersion, _fontStyle);
		var about02 = game.add.text(game.world.centerX, aboutPosition+140, "UNIVERSITY\nSENAC-RS", _fontStyle);
		var about03 = game.add.text(game.world.centerX, aboutPosition+280, "UNIVERSITY\nIFRS", _fontStyle);
		var about04 = game.add.text(game.world.centerX, aboutPosition+420, "PORTO ALEGRE\nRS - BRAZIL", _fontStyle);
		utils.centerGameObjects([about01, about02, about03, about04]);
	},
};	