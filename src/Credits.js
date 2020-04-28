GAME.Credits = function(game) {};

GAME.Credits.prototype = {
	
	preload: function () {
		this.creditCount = 0;		
	},
	
	addCredit: function(task, author) {
		var authorStyle = { font: '40pt SFDistantGalaxy', fill: 'white', align: 'center', stroke: 'rgba(0,0,0,0)', srokeThickness: 4};
		var taskStyle = { font: '30pt SFDistantGalaxy', fill: 'white', align: 'center', stroke: 'rgba(0,0,0,0)', srokeThickness: 4};
		var authorText = game.add.text(game.world.centerX, 1350, author, authorStyle);
		var taskText = game.add.text(game.world.centerX, 1400, task, taskStyle);
		authorText.anchor.setTo(0.5);
		authorText.stroke = "rgba(0,0,0,0)";
		authorText.strokeThickness = 4;
		taskText.anchor.setTo(0.5);
		taskText.stroke = "rgba(0,0,0,0)";
		taskText.strokeThickness = 4;
		game.add.tween(authorText).to( { y: -300 }, 16000, Phaser.Easing.Cubic.Out, true, this.creditCount * 5000);
		game.add.tween(taskText).to( { y: -200 }, 16000, Phaser.Easing.Cubic.Out, true, this.creditCount * 5000);
		this.creditCount ++;
	},
	
	create: function () {
		Vendor.addBG('background');
		game.add.tween(bg).to({alpha: 0}, 4500, Phaser.Easing.Cubic.Out, true, 18500); // 18.5 seconds bg tweeen to black
		
		this.addCredit('DEVELOPER', 'YONATHAN STEIN');
		this.addCredit('PHASER.IO', 'POWERED BY');
		this.addCredit('FOR PLAYING', 'THANK YOU');
		
		Vendor.addMusic('credits', false);
		Vendor.addBtn('back', btnPosition_01, 'MainMenu');
		console.log("Credits\t\tOK");
	},	
};		