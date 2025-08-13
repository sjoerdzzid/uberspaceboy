function createIntroImages () {
    introSprites.push(images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `))
    introSprites.push(images.createImage(`
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `))
    introSprites.push(images.createImage(`
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        `))
    introSprites.push(images.createImage(`
        . # . . .
        . . . . .
        . . . . .
        . # . . .
        . # . . .
        `))
    introSprites.push(images.createImage(`
        . # . . .
        . . . . .
        . # . . .
        . . . . .
        . # . . .
        `))
    introSprites.push(images.createImage(`
        . # . . .
        . # . . .
        . . . . .
        . . . . .
        . # . . .
        `))
    introSprites.push(images.createImage(`
        . # # . .
        . . # . .
        . . . . .
        . . . . .
        . # . . .
        `))
    introSprites.push(images.createImage(`
        . . # # .
        . . # . .
        . . . # .
        . . . . .
        . # . . .
        `))
    introSprites.push(images.createImage(`
        # . . # #
        . . . . .
        . . . # .
        . . . . #
        . # . . .
        `))
    introSprites.push(images.createImage(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `))
    introSprites.push(images.createImage(`
        # . . . .
        . . . . .
        . . . . .
        # . . . .
        # . . . .
        `))
    introSprites.push(images.createImage(`
        # . . . .
        . . . . .
        # . . . .
        . . . . .
        # . . . .
        `))
    introSprites.push(images.createImage(`
        # . . . .
        # . . . .
        . . . . .
        . . . . .
        # . . . .
        `))
    introSprites.push(images.createImage(`
        # # . . .
        . # . . .
        . . . . .
        . . . . .
        # . . . .
        `))
    introSprites.push(images.createImage(`
        . # # . .
        . # . . .
        . . # . .
        . . . . .
        # . . . .
        `))
    introSprites.push(images.createImage(`
        . # # # .
        . # . . .
        . . # . .
        . . . # .
        # . . . .
        `))
    introSprites.push(images.createImage(`
        . . # # #
        . . . . .
        . . # . .
        . . . # .
        # . . . #
        `))
    introSprites.push(images.createImage(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        `))
    introSprites.push(images.createImage(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `))
    introSprites.push(images.createImage(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . # .
        `))
    introSprites.push(images.createImage(`
        . . . . #
        . . . . #
        . . . . .
        . . . . .
        . . . . #
        `))
    introSprites.push(images.createImage(`
        . . . . #
        . . . . .
        . . . . #
        . . . . .
        . . . . #
        `))
    introSprites.push(images.createImage(`
        . . . . #
        . . . . .
        . . . . .
        . . . . #
        . . . . #
        `))
    introSprites.push(images.createImage(`
        . . . . #
        . . . . .
        . . # . .
        . . . # .
        . . # # #
        `))
    introSprites.push(images.createImage(`
        . . . . #
        . # . . .
        . . # . #
        . . . # #
        . . # # #
        `))
    introSprites.push(images.createImage(`
        . . . . #
        . # . # #
        . . # # #
        . . # # #
        . # # # #
        `))
    introSprites.push(images.createImage(`
        # . # # #
        . # # # #
        . # # # #
        . # # # #
        # # # # #
        `))
    introSprites.push(images.createImage(`
        # # # # #
        . # # # #
        # # # # #
        # # # # #
        # # # # #
        `))
    introSprites.push(images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `))
    introSprites.push(images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # . # . #
        `))
    introSprites.push(images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # . # . #
        . . . . .
        `))
    introSprites.push(images.createImage(`
        # # # # #
        # # # # #
        . # . # .
        . . . . .
        . . . . .
        `))
    introSprites.push(images.createImage(`
        # # # # #
        # . # . #
        . . . . .
        . . . . .
        . . . . .
        `))
    introSprites.push(images.createImage(`
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `))
    introSprites.push(images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `))
    introSprites.push(images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        `))
    introSprites.push(images.createImage(`
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        # # # # #
        `))
    introSprites.push(images.createImage(`
        . . . . .
        . . # . .
        . # # # .
        # # # # #
        # . # . #
        `))
    introTrailer()
}
function UpdateSpace () {
    for (let bullet of ActiveBullets) {
        if (bullet.get(LedSpriteProperty.Y) > 0) {
            bullet.change(LedSpriteProperty.Y, -1)
            bullet.change(LedSpriteProperty.Brightness, -30)
        } else {
            bullet.change(LedSpriteProperty.Brightness, -60)
        }
        if (bullet.isTouching(SpaceDestroyer)) {
            bullet.delete()
            SpaceDestroyer.delete()
            EnemyExplode()
        }
    }
    for (let enemyBullet of ActiveEnemyFire) {
        if (enemyBullet.get(LedSpriteProperty.Y) <= 5) {
            enemyBullet.change(LedSpriteProperty.Y, 1)
        }
        if (enemyBullet.isTouching(Spaceship)) {
            game.removeLife(1)
            ActiveEnemyFire.removeAt(ActiveEnemyFire.indexOf(enemyBullet))
            enemyBullet.delete()
            PlaySound("SPACEBOY_HIT")
        }
        if (enemyBullet.get(LedSpriteProperty.Y) == 4) {
            basic.pause(100)
            ActiveEnemyFire.removeAt(ActiveEnemyFire.indexOf(enemyBullet))
            enemyBullet.delete()
        }
    }
    for (let particle of ExplosionParticles) {
        if (particle.isTouchingEdge()) {
            particle.change(LedSpriteProperty.Brightness, -60)
            particle.move(1)
        } else {
            particle.move(1)
            particle.set(LedSpriteProperty.Brightness, randint(75, 255))
        }
    }
}
function showMenuItem (item: string) {
    music.stopAllSounds()
    if (item == "START") {
        images.createImage(`
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            # . # . #
            `).showImage(0)
    }
    if (item == "SOUND") {
        if (soundOn) {
            images.createImage(`
                . . # . .
                . # # # .
                . # # # .
                # # # # #
                . . # . .
                `).showImage(0)
        } else {
            images.createImage(`
                . . # . #
                . # # # .
                . # # . .
                . # . # #
                # . # . .
                `).showImage(0)
        }
    }
    if (item == "SPEED") {
        images.createImage(`
            . # . # .
            # # # # #
            . # . # .
            # # # # #
            . # . # .
            `).showImage(0)
    }
}
function SpaceShipFire () {
    ActiveBullets.push(game.createSprite(Spaceship.get(LedSpriteProperty.X), Spaceship.get(LedSpriteProperty.Y) - 1))
    PlaySound("SPACEBOY_FIRE")
}
function EnemyExplode () {
    PlaySound("ENEMY_EXPLODE")
    score += 1
    for (let direction of ExplosionParticleDirections) {
        temp_particle = game.createSprite(SpaceDestroyer.get(LedSpriteProperty.X), 0)
        temp_particle.set(LedSpriteProperty.Direction, direction)
        ExplosionParticles.push(temp_particle)
    }
    spawnSpaceDestroyer()
}
function PlaySound (sound: string) {
    if (soundOn) {
        if (sound == "SPACEBOY_FIRE") {
            music.play(music.createSoundExpression(WaveShape.Sawtooth, 5000, 1317, 255, 16, 200, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
        }
        if (sound == "SPACEBOY_HIT") {
            music.play(music.createSoundExpression(WaveShape.Sawtooth, 606, 217, 255, 255, 200, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
        }
        if (sound == "ENEMY_FIRE") {
            music.play(music.createSoundExpression(WaveShape.Noise, 1757, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        }
        if (sound == "ENEMY_EXPLODE") {
            music.play(music.createSoundExpression(WaveShape.Noise, 579, 551, 212, 111, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        }
        if (sound == "MENU_CLICK") {
            music.play(music.createSoundExpression(WaveShape.Noise, 578, 522, 131, 0, 50, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
        }
        if (sound == "SOUND_ON") {
            music.play(music.createSoundExpression(WaveShape.Sine, 1831, 3139, 215, 120, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        }
        if (sound == "SOUND_OFF") {
            music.play(music.createSoundExpression(WaveShape.Sine, 3139, 2193, 167, 145, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        }
    }
}
function DeleteGarbage () {
    for (let finished_bullet of ActiveBullets) {
        if (finished_bullet.get(LedSpriteProperty.Y) == 0 && finished_bullet.get(LedSpriteProperty.Brightness) == 0) {
            finished_bullet.delete()
            if (finished_bullet.isDeleted()) {
                ActiveBullets.shift()
            }
        }
    }
    for (let finished_particle of ExplosionParticles) {
        if (finished_particle.get(LedSpriteProperty.Y) <= 4 && finished_particle.get(LedSpriteProperty.Brightness) == 0) {
            finished_particle.delete()
            if (finished_particle.isDeleted()) {
                ExplosionParticles.shift()
            }
        }
    }
}
function startGame () {
    menuActive = false
    game.setLife(5)
    Spaceship = game.createSprite(2, 4)
    spawnSpaceDestroyer()
    gameStarted = true
}
input.onButtonPressed(Button.A, function () {
    if (menuActive) {
        PlaySound("MENU_CLICK")
        navigateMenu(-1)
    } else {
        Spaceship.change(LedSpriteProperty.X, -1)
    }
})
function confirmMenu () {
    if (MenuItems[menuIndex] == "SOUND") {
        if (soundOn) {
            PlaySound("SOUND_OFF")
            soundOn = false
        } else {
            PlaySound("SOUND_ON")
            soundOn = true
        }
        showMenuItem("SOUND")
    }
    if (MenuItems[menuIndex] == "START") {
        startGame()
    }
}
function introTrailer () {
    introActive = true
    if (soundOn) {
        music.play(music.stringPlayable("B A A B D C D E ", 200), music.PlaybackMode.LoopingInBackground)
    }
    for (let introSprite of introSprites) {
        introSprite.showImage(0, 150)
    }
    introActive = false
    initMenu()
}
input.onButtonPressed(Button.AB, function () {
    if (introActive) {
        music.stopAllSounds()
    } else if (menuActive) {
        confirmMenu()
    } else {
        SpaceShipFire()
    }
})
input.onButtonPressed(Button.B, function () {
    if (menuActive) {
        PlaySound("MENU_CLICK")
        navigateMenu(1)
    } else {
        Spaceship.change(LedSpriteProperty.X, 1)
    }
})
function initMenu () {
    menuActive = true
    MenuItems = ["START", "SOUND", "SPEED"]
    menuIndex = 0
    menuActive = true
    showMenuItem("START")
}
function spawnSpaceDestroyer () {
    SpaceDestroyer = game.createSprite(randint(0, 4), 0)
    enemyActive = true
}
function navigateMenu (direction2: number) {
    menuIndex += direction2
    if (menuIndex < 0) {
        menuIndex = MenuItems.length - 1
    }
    if (menuIndex >= MenuItems.length) {
        menuIndex = 0
    }
    showMenuItem(MenuItems[menuIndex])
}
function EnemyFire () {
    ActiveEnemyFire.push(game.createSprite(SpaceDestroyer.get(LedSpriteProperty.X), SpaceDestroyer.get(LedSpriteProperty.Y) + 1))
    PlaySound("ENEMY_FIRE")
}
let enemyActive = false
let menuIndex = 0
let MenuItems: string[] = []
let gameStarted = false
let menuActive = false
let temp_particle: game.LedSprite = null
let score = 0
let Spaceship: game.LedSprite = null
let SpaceDestroyer: game.LedSprite = null
let ActiveBullets: game.LedSprite[] = []
let introSprites: Image[] = []
let ExplosionParticleDirections: number[] = []
let ExplosionParticles: game.LedSprite[] = []
let ActiveEnemyFire: game.LedSprite[] = []
let introActive = false
let soundOn = false
let enemyActionSpeed = 0
let temp_pos = 0
music.setBuiltInSpeakerEnabled(true)
let enemyLocation = randint(0, 4)
let enemySpeed = 200
let enemyFireSpeed = 3500
soundOn = true
let menuSpeed = 100
let gameSpeed = 100
let garbageCollectorSpeed = 3000
introActive = true
ActiveEnemyFire = []
ExplosionParticles = []
ExplosionParticleDirections = [
-135,
135,
45,
-45
]
createIntroImages()
loops.everyInterval(garbageCollectorSpeed, function () {
    DeleteGarbage()
})
loops.everyInterval(4000, function () {
    if (enemyActive) {
        enemyLocation = randint(0, 4)
    }
})
loops.everyInterval(enemyFireSpeed, function () {
    if (gameStarted) {
        EnemyFire()
    }
})
loops.everyInterval(gameSpeed, function () {
    if (gameStarted) {
        UpdateSpace()
    }
})
basic.forever(function () {
    if (game.isGameOver()) {
        basic.showNumber(score)
        basic.pause(2000)
        control.reset()
    }
})
loops.everyInterval(enemySpeed, function () {
    if (enemyActive) {
        if (enemyLocation < SpaceDestroyer.get(LedSpriteProperty.X)) {
            SpaceDestroyer.change(LedSpriteProperty.X, -1)
        }
        if (enemyLocation > SpaceDestroyer.get(LedSpriteProperty.X)) {
            SpaceDestroyer.change(LedSpriteProperty.X, 1)
        }
    }
})
