GAME.GameOver = function(game) {};

GAME.GameOver.prototype = {
	
	create: function () {
		Vendor.addBG('background');				
		Vendor.resetGame();
		Vendor.addTitle(titlePosition_01, 'title_game_over');
		Vendor.addBtn('play_again', 600, 'Level_1');	
		Vendor.addBtn('main_menu', 700, 'MainMenu');
		console.log("GameOver\tOK");
	},
};