GAME.About = function () {};

GAME.About.prototype = {

	create: function () {

		Vendor.addBackground('bg');
		Vendor.addMusic('mp3_options', true);
		Vendor.addTitle(positionTitle1, 'title_about');
		Vendor.addButton('btn_back', positionBtn, 'MainMenu');

		var about1 = game.add.text(game.world.centerX, positionTxtAbout, "VERSION\n1.6.3 - 2020", _fontStyle);
		var about2 = game.add.text(game.world.centerX, positionTxtAbout + 140, "SENAC-RS\nUNIVERSITY", _fontStyle);
		var about3 = game.add.text(game.world.centerX, positionTxtAbout + 280, "IFRS\nUNIVERSITY", _fontStyle);
		var about4 = game.add.text(game.world.centerX, positionTxtAbout + 420, "PORTO ALEGRE\nRS - BRAZIL", _fontStyle);

		Vendor.addCenterObject([about1, about2, about3, about4]);

		console.log("About\t\tOK");

	},

};