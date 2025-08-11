/**
 * loops.everyInterval(menuSpeed, function () {
 * 
 * })
 */
function UpdateSpace () {
    for (let bullet of ActiveBullets) {
        if (bullet.get(LedSpriteProperty.Y) > 0) {
            bullet.change(LedSpriteProperty.Y, -1)
            bullet.change(LedSpriteProperty.Brightness, -30)
        } else {
            bullet.change(LedSpriteProperty.Brightness, -60)
        }
        if (bullet.isTouching(SpaceDestroyer)) {
            EnemyExplode()
        }
    }
    for (let enemyBullet of ActiveEnemyFire) {
        if (enemyBullet.get(LedSpriteProperty.Y) <= 5) {
            enemyBullet.change(LedSpriteProperty.Y, 1)
        }
        if (enemyBullet.isTouching(Spaceship)) {
            game.removeLife(0)
            enemyBullet.delete()
            ActiveEnemyFire.splice(ActiveEnemyFire.indexOf(enemyBullet), 1)
        }
        if (enemyBullet.get(LedSpriteProperty.Y) == 4) {
            basic.pause(100)
            ActiveEnemyFire.splice(ActiveEnemyFire.indexOf(enemyBullet), 1)
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
    if (item == "START") {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            # . # . #
            `)
    }
    if (item == "SOUND") {
        if (soundOn) {
            basic.showLeds(`
                . . # . .
                . # # # .
                . # # # .
                # # # # #
                . . # . .
                `)
        } else {
            basic.showLeds(`
                . . # . #
                . # # # .
                . # # . .
                . # . # #
                # . # . .
                `)
        }
    }
    if (item == "SPEED") {
        basic.showLeds(`
            . # . # .
            # # # # #
            . # . # .
            # # # # #
            . # . # .
            `)
    }
}
function SpaceShipFire () {
    ActiveBullets.push(game.createSprite(Spaceship.get(LedSpriteProperty.X), Spaceship.get(LedSpriteProperty.Y) - 1))
}
function EnemyExplode () {
    for (let direction of ExplosionParticleDirections) {
        temp_particle = game.createSprite(SpaceDestroyer.get(LedSpriteProperty.X), 0)
        temp_particle.set(LedSpriteProperty.Direction, direction)
        ExplosionParticles.push(temp_particle)
    }
    SpaceDestroyer.delete()
    score += 1
    spawnSpaceDestroyer()
}
function PlaySound (sound: string) {
    if (soundOn) {
    	
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
        navigateMenu(-1)
    } else {
        Spaceship.change(LedSpriteProperty.X, -1)
    }
})
function confirmMenu () {
    if (MenuItems[menuIndex] == "SOUND") {
        if (soundOn) {
            soundOn = false
        } else {
            soundOn = true
        }
        showMenuItem("SOUND")
    }
    if (MenuItems[menuIndex] == "START") {
        startGame()
    }
}
function introTrailer () {
    basic.showLeds(`
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        `)
    basic.showLeds(`
        . # . . .
        . . . . .
        . . . . .
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        . # . . .
        . . . . .
        . # . . .
        . . . . .
        . # . . .
        `)
    basic.showLeds(`
        . # . . .
        . # . . .
        . . . . .
        . . . . .
        . # . . .
        `)
    basic.showLeds(`
        . # # . .
        . . # . .
        . . . . .
        . . . . .
        . # . . .
        `)
    basic.showLeds(`
        . . # # .
        . . # . .
        . . . # .
        . . . . .
        . # . . .
        `)
    basic.showLeds(`
        # . . # #
        . . . . .
        . . . # .
        . . . . #
        . # . . .
        `)
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        # . . . .
        . . . . .
        # . . . .
        . . . . .
        # . . . .
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    basic.showLeds(`
        # # . . .
        . # . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    basic.showLeds(`
        . # # . .
        . # . . .
        . . # . .
        . . . . .
        # . . . .
        `)
    basic.showLeds(`
        . # # # .
        . # . . .
        . . # . .
        . . . # .
        # . . . .
        `)
    basic.showLeds(`
        . . # # #
        . . . . .
        . . # . .
        . . . # .
        # . . . #
        `)
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . # .
        `)
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . .
        . . . . .
        . . . . #
        `)
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . #
        . . . . .
        . . . . #
        `)
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . #
        . . . . #
        `)
    basic.showLeds(`
        . . . . #
        . . . . .
        . . # . .
        . . . # .
        . . # # #
        `)
    basic.showLeds(`
        . . . . #
        . # . . .
        . . # . #
        . . . # #
        . . # # #
        `)
    basic.showLeds(`
        . . . . #
        . # . # #
        . . # # #
        . . # # #
        . # # # #
        `)
    basic.showLeds(`
        # . # # #
        . # # # #
        . # # # #
        . # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        . # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # . # . #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # . # . #
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        . # . # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . # . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        # # # # #
        # . # . #
        `)
    introActive = false
    initMenu()
}
function startIntro () {
    introTrailer()
}
input.onButtonPressed(Button.AB, function () {
    if (introActive) {
        introActive = false
    } else if (menuActive) {
        confirmMenu()
    } else {
        SpaceShipFire()
    }
})
input.onButtonPressed(Button.B, function () {
    if (menuActive) {
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
}
function navigateMenu (direction: number) {
    menuIndex += direction
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
}
let menuIndex = 0
let MenuItems: string[] = []
let gameStarted = false
let menuActive = false
let score = 0
let temp_particle: game.LedSprite = null
let soundOn = false
let Spaceship: game.LedSprite = null
let SpaceDestroyer: game.LedSprite = null
let ActiveBullets: game.LedSprite[] = []
let ExplosionParticleDirections: number[] = []
let ExplosionParticles: game.LedSprite[] = []
let introActive = false
let temp_pos = 0
let ActiveEnemyFire: game.LedSprite[] = []
let menuSpeed = 100
let gameSpeed = 100
let enemySpeed = 200
let enemyFireSpeed = 3500
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
startIntro()
loops.everyInterval(garbageCollectorSpeed, function () {
    DeleteGarbage()
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
