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
            enemyBullet.delete()
            game.removeLife(1)
            ActiveEnemyFire.removeAt(ActiveEnemyFire.indexOf(enemyBullet))
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
    points += 1
    for (let direction of ExplosionParticleDirections) {
        temp_particle = game.createSprite(SpaceDestroyer.get(LedSpriteProperty.X), 0)
        temp_particle.set(LedSpriteProperty.Direction, direction)
        ExplosionParticles.push(temp_particle)
    }
    SpaceDestroyer.delete()
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
// function handleNebula () {
// // Reset brightness of all rows to 0
// for (let row2 of background_nebula) {
// for (let sprite of row2) {
// sprite.set(LedSpriteProperty.Brightness, 0)
// }
// }
// // Set brightness of the current row
// bright = randint(0, 60)
// for (let sprite2 of background_nebula[nebulaRow]) {
// sprite2.set(LedSpriteProperty.Brightness, bright)
// }
// // Move to the next row
// nebulaRow += 1
// if (nebulaRow >= background_nebula.length) {
// // Reset to the first row if we reach the end
// nebulaRow = 0
// }
// }
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
// function handleStar (index: number) {
// temp_star = StarSprites[index]
// temp_pos = starPosY[index]
// starPosY[index] = temp_pos + 1
// if (temp_pos >= 1) {
// temp_star.move(1)
// }
// if (temp_pos == 20) {
// temp_star.set(LedSpriteProperty.Y, 0)
// temp_star.set(LedSpriteProperty.Brightness, 128)
// starPosY[index] = -1
// }
// if (temp_pos > 4) {
// temp_star.set(LedSpriteProperty.Brightness, 0)
// }
// if (temp_pos >= 0 && temp_pos < 5) {
// temp_star.set(LedSpriteProperty.Brightness, randint(50, 128))
// }
// }
input.onButtonPressed(Button.AB, function () {
    if (menuActive) {
        confirmMenu()
    } else {
        SpaceShipFire()
    }
})
function init () {
    temp_pos = 0
    ActiveEnemyFire = []
    ExplosionParticles = []
    menuSpeed = 100
    gameSpeed = 100
    enemySpeed = 200
    enemyFireSpeed = 3500
    points = 0
    garbageCollectorSpeed = 3000
    // let background_nebula = initNebula()
    soundOn = true
    ExplosionParticleDirections = [
    -135,
    135,
    45,
    -45
    ]
    initMenu()
}
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
let garbageCollectorSpeed = 0
let enemyFireSpeed = 0
let enemySpeed = 0
let gameSpeed = 0
let menuSpeed = 0
let temp_pos = 0
let menuIndex = 0
let MenuItems: string[] = []
let gameStarted = false
let menuActive = false
let temp_particle: game.LedSprite = null
let ExplosionParticleDirections: number[] = []
let points = 0
let soundOn = false
let ExplosionParticles: game.LedSprite[] = []
let Spaceship: game.LedSprite = null
let ActiveEnemyFire: game.LedSprite[] = []
let SpaceDestroyer: game.LedSprite = null
let ActiveBullets: game.LedSprite[] = []
init()
loops.everyInterval(garbageCollectorSpeed, function () {
    DeleteGarbage()
})
loops.everyInterval(enemyFireSpeed, function () {
    if (gameStarted) {
        EnemyFire()
    }
})
// loops.everyInterval(menuSpeed, function () {
// })
loops.everyInterval(gameSpeed, function () {
    if (gameStarted) {
        UpdateSpace()
    }
})
