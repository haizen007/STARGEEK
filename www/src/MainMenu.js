GAME.MainMenu = function () {};

GAME.MainMenu.prototype = {

	create: function () {

		Vendor.addBackground('bg');
		Vendor.addMusic('mp3_main_menu', true);
		Vendor.addButton('btn_start', 600, 'GameStory');
		Vendor.addButton('btn_options', 700, 'Options');
		Vendor.addButton('btn_credits', 800, 'Credits');
		Vendor.addButton('btn_about', 900, 'About');
		Vendor.addImage(50, 200, 'logo');
		console.log("MainMenu\tOK");

	},

};