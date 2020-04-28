Asteroids = {

    spawnAsteroid: function () {
        var asteroidPosition = Math.floor(Math.random() * (645 - 75)) + 75; // 75px from each side of 720px
        var asteroidNow = Math.floor(Math.random() * 8); // add a random asteroid
        var asteroidSet = game.add.sprite(asteroidPosition, asteroidNow, 'spritesheet_asteroids');
        asteroidSet.events.onOutOfBounds.add(this.removeAsteroid, this); // removes asteroid when hits the bottom
        asteroidSet.events.onInputDown.add(this.clickAsteroid, this); // removes asteroid when click on it
        asteroidSet.animations.add('anim', [asteroidNow], 10, true);
        asteroidSet.animations.play('anim');
        asteroidSet.checkWorldBounds = true;
        asteroidSet.inputEnabled = true;
        asteroidSet.anchor.setTo(0.5, 0.5);
        asteroidSet.rotateMe = (Math.random() * 4) - 2;
        asteroidGroup.add(asteroidSet); // created in Game.js
        game.physics.enable(asteroidSet, Phaser.Physics.ARCADE);
    },

    removeAsteroid: function (asteroid) {
        _health -= 1;
        asteroid.kill();
        Vendor.addSound(soundDrop);
        Vendor.addVibration();
        Vendor.updateEnergy();
        if (playShake) {
            game.add.tween(bg) // Shake the background by moving it up and down 5 times really fast
                .to({
                    y: -13
                }, 80, Phaser.Easing.Sinusoidal.InOut, false, 0, 5, true)
                .start();
        }
    },

    clickAsteroid: function (asteroid) {
        _score += 1;
        asteroid.kill();
        this.explodeAsteroid(asteroid);
        Vendor.addSound(soundExplode);
        Vendor.updateScore();
        Vendor.updateGravity();
    },

    explodeAsteroid: function (asteroid) {
        var explosion = game.add.sprite(asteroid.world.x, asteroid.world.y, 'spritesheet_explosion');
        explosion.checkWorldBounds = true;
        explosion.anchor.setTo(0.5, 0.5);
        explosion.rotateMe = (Math.random() * 4) - 2;
        explosion.animations.add('explode');
        explosion.animations.play('explode', 35, true);
        game.add.tween(explosion).to({
            alpha: 0
        }, 1000, Phaser.Easing.Cubic.Out, true, 200);
    },

};

console.log("Asteroids\tOK");