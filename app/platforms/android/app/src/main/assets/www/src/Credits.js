GAME.Credits = function () {};

GAME.Credits.prototype = {

	preload: function () {
		this.creditCount = 0;
	},

	addCredit: function (txt1, txt2) {

		var _style1 = {
			font: "55px SFDistantGalaxy",
			fill: "#FFFFFF",
		};

		var _style2 = {
			font: "40px SFDistantGalaxy",
			fill: "#FFFFFF",
		};

		var txt1 = game.add.text(game.world.centerX, 1350, txt1, _style1);
		var txt2 = game.add.text(game.world.centerX, 1400, txt2, _style2);

		Vendor.addCenterObject([txt1, txt2]);

		game.add.tween(txt1).to({
			y: -300
		}, 16000, Phaser.Easing.Cubic.Out, true, this.creditCount * 5000);

		game.add.tween(txt2).to({
			y: -200
		}, 16000, Phaser.Easing.Cubic.Out, true, this.creditCount * 5000);

		this.creditCount++;
	},

	create: function () {

		Vendor.addBackground('bg');
		Vendor.addMusic('mp3_credits', false); // loop = false

		game.add.tween(bg).to({
			alpha: 0
		}, 4500, Phaser.Easing.Cubic.Out, true, 18500); // 18.5 seconds bg tweeen to black

		this.addCredit('YONATHAN STEIN', 'DEVELOPER');
		this.addCredit('PHASER.IO v2.4.6', 'POWERED BY');
		this.addCredit('THANK YOU', 'FOR PLAYING');

		Vendor.addButton('btn_back', positionBtn, 'MainMenu'); // the last to stay in front of the credits text

		console.log("Credits\t\tOK");
	},

};