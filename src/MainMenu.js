GAME.MainMenu = function(game) {};

GAME.MainMenu.prototype = {
	
	create: function () {
		Vendor.addBG('background');
		game.add.sprite(50, 200, 'logo');		
		Vendor.addMusic('main_menu', true);
		Vendor.addSound();	//reload sounds with the configured volume
		Vendor.resetGame();
		Vendor.addBtn('start', 600, 'Game');
		Vendor.addBtn('options', 700, 'Options');
		Vendor.addBtn('credits', 800, 'Credits');	
		Vendor.addBtn('about', 900, 'About');		
		console.log("MainMenu\tOK");
	},
};