GAME.GameOver = function () {};

GAME.GameOver.prototype = {

	create: function () {

		Vendor.addBackground('bg');
		Vendor.addTitle(positionTitle1, 'title_game_over');
		Vendor.addButton('btn_play_again', 640, 'Game');
		Vendor.addButton('btn_main_menu', 740, 'MainMenu');
		Vendor.resetGame();
		console.log("GameOver\tOK");

	},

};