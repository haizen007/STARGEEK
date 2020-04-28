GAME.GameVictory = function () {};

GAME.GameVictory.prototype = {

	create: function () {

		Vendor.addBackground('bg');
		Vendor.addTitle(positionTitle1, 'title_game_victory');
		Vendor.addButton('btn_play_again', 640, 'Game');
		Vendor.addButton('btn_main_menu', 740, 'MainMenu');
		Vendor.resetGame();
		console.log("GameVictory\tOK");

	},

};