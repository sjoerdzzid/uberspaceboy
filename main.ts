function handleNebula() {
    // Shift the brightness values down by one row
    // Store the brightness of the last row
    lastBrightness = rowBrightness[rowBrightness.length - 1]
    for (let i = rowBrightness.length - 1; i > 0; i--) {
        rowBrightness[i] = rowBrightness[i - 1]
    }
    // Wrap the last row's brightness to the first row
    // Wrap the last row's brightness to the first row
    rowBrightness[0] = lastBrightness
    // Apply the brightness to each row in the nebula
    // for (let y2 = 0; y2 <= background_nebula.length - 1; y2++) {
    //     bright = rowBrightness[y2]
    //     for (let sprite of background_nebula[y2]) {
    //         sprite.set(LedSpriteProperty.Brightness, bright)
    //     }
    // }
}

loops.everyInterval(200, function () {
    for (let index = 0; index <= 4; index++) {
        // handleNebula()
        // handleStar(index)
    }
})

function UpdateSpace() {
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
function showMenuItem(item: string) {
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
function SpaceShipFire() {
    ActiveBullets.push(game.createSprite(Spaceship.get(LedSpriteProperty.X), Spaceship.get(LedSpriteProperty.Y) - 1))
}
function EnemyExplode() {
    for (let direction of ExplosionParticleDirections) {
        temp_particle = game.createSprite(SpaceDestroyer.get(LedSpriteProperty.X), 0)
        temp_particle.set(LedSpriteProperty.Direction, direction)
        ExplosionParticles.push(temp_particle)
    }
    SpaceDestroyer.delete()
    spawnSpaceDestroyer()
}
function PlaySound(sound: string) {
    if (soundOn) {

    }
}
function DeleteGarbage() {
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
function startGame() {
    menuActive = false
    game.setLife(5)
    Spaceship = game.createSprite(2, 4)
    spawnSpaceDestroyer()
}
function initNebula() {
    let nebula: game.LedSprite[][] = []
    for (let y = 0; y <= 4; y++) {
        let row: game.LedSprite[] = []
        for (let x = 0; x <= 4; x++) {
            sprite = game.createSprite(x, y)
            sprite.set(LedSpriteProperty.Brightness, 0)
            sprite.set(LedSpriteProperty.Direction, 180)
            row.push(sprite)
        }
        nebula.push(row)
    }
    return nebula
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
function confirmMenu() {
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
input.onButtonPressed(Button.B, function () {
    if (menuActive) {
        navigateMenu(1)
    } else {
        Spaceship.change(LedSpriteProperty.X, 1)
    }
})
function initMenu() {
    menuActive = true
    MenuItems = ["START", "SOUND", "SPEED"]
    menuIndex = 0
    menuActive = true
    showMenuItem("START")
}
function spawnSpaceDestroyer() {
    SpaceDestroyer = game.createSprite(randint(0, 4), 0)
}
function navigateMenu(direction: number) {
    menuIndex += direction
    if (menuIndex < 0) {
        menuIndex = MenuItems.length - 1
    }
    if (menuIndex >= MenuItems.length) {
        menuIndex = 0
    }
    showMenuItem(MenuItems[menuIndex])
}
function initStars() {
    let StarSprites: game.LedSprite[] = []
    starPosY = [
        4,
        8,
        16,
        12,
        0
    ]
    for (let x2 = 0; x2 <= 4; x2++) {
        StarSprites.push(game.createSprite(x2, starPosY[x2]))
    }
    for (let p of StarSprites) {
        p.set(LedSpriteProperty.Direction, 180)
    }
}
function EnemyFire() {

}
let starPosY: number[] = []
let menuIndex = 0
let MenuItems: string[] = []
let sprite: game.LedSprite = null
let menuActive = false
let temp_particle: game.LedSprite = null
let Spaceship: game.LedSprite = null
let SpaceDestroyer: game.LedSprite = null
let ActiveBullets: game.LedSprite[] = []
let ExplosionParticleDirections: number[] = []
let soundOn = false
let ExplosionParticles: game.LedSprite[] = []
let temp_pos = 0
let lastBrightness = 0
let bright = 0
let temp_star = null
let nebulaRow = 0
// Array to hold brightness values for each row
let rowBrightness = [
    10,
    50,
    20,
    60,
    20
]
ExplosionParticles = []
let menuSpeed = 100
let gameSpeed = 100
let enemySpeed = 200
let garbageCollectorSpeed = 3000
// let background_nebula = initNebula()
soundOn = true
ExplosionParticleDirections = [
    -135,
    135,
    45,
    -45
]
initMenu()
loops.everyInterval(garbageCollectorSpeed, function () {
    DeleteGarbage()
})
// loops.everyInterval(menuSpeed, function () {
// })
loops.everyInterval(gameSpeed, function () {
    if (!(menuActive)) {
        UpdateSpace()
    }
})
