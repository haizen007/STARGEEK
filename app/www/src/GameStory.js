GAME.GameStory = function () {};

GAME.GameStory.prototype = {

	create: function () {

		Vendor.addBackground('bg');
		Vendor.addMusic('mp3_main_menu', true);
		Vendor.addButton('btn_next', positionBtn, 'Game');

		var content =

			"TO SAVE THE EARTH\n" +
			"YOU MUST CLICK ON THE\n" +
			"ASTEROIDS TO DESTROY THEM\n\n" +

			"IF THEY HIT THE BOTTOM\n" +
			"YOU WILL LOSE YOUR\n" +
			"FORCE FIELD ENERGY\n\n" +

			"YOU HAVE ONLY 6 ENERGY\n" +
			"CELLS TO KEEP YOUR\n" +
			"FORCE FIELD ACTIVE\n\n" +

			"GOOD LUCK";

		var story = game.add.text(game.world.centerX, positionTxtGameStory, content, _fontStyle);

		Vendor.addCenterObject([story]);

		console.log("GameStory\tOK");

	},

};