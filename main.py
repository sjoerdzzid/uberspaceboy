def UpdateSpace():
    for bullet in ActiveBullets:
        if bullet.get(LedSpriteProperty.Y) > 0:
            bullet.change(LedSpriteProperty.Y, -1)
            bullet.change(LedSpriteProperty.BRIGHTNESS, -30)
        else:
            bullet.change(LedSpriteProperty.BRIGHTNESS, -60)
        if bullet.is_touching(SpaceDestroyer):
            EnemyExplode()
    for enemyBullet in ActiveEnemyFire:
        if enemyBullet.get(LedSpriteProperty.Y) <= 5:
            enemyBullet.change(LedSpriteProperty.Y, 1)
        if enemyBullet.is_touching(Spaceship):
            game.remove_life(0)
            enemyBullet.delete()
            ActiveEnemyFire.splice(ActiveEnemyFire.index_of(enemyBullet), 1)
        if enemyBullet.get(LedSpriteProperty.Y) == 4:
            basic.pause(100)
            ActiveEnemyFire.splice(ActiveEnemyFire.index_of(enemyBullet), 1)
            enemyBullet.delete()
    for particle in ExplosionParticles:
        if particle.is_touching_edge():
            particle.change(LedSpriteProperty.BRIGHTNESS, -60)
            particle.move(1)
        else:
            particle.move(1)
            particle.set(LedSpriteProperty.BRIGHTNESS, randint(75, 255))
def showMenuItem(item: str):
    if item == "START":
        basic.show_leds("""
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            # . # . #
            """)
    if item == "SOUND":
        if soundOn:
            basic.show_leds("""
                . . # . .
                . # # # .
                . # # # .
                # # # # #
                . . # . .
                """)
        else:
            basic.show_leds("""
                . . # . #
                . # # # .
                . # # . .
                . # . # #
                # . # . .
                """)
    if item == "SPEED":
        basic.show_leds("""
            . # . # .
            # # # # #
            . # . # .
            # # # # #
            . # . # .
            """)
def SpaceShipFire():
    ActiveBullets.append(game.create_sprite(Spaceship.get(LedSpriteProperty.X),
            Spaceship.get(LedSpriteProperty.Y) - 1))
def EnemyExplode():
    global temp_particle, score
    for direction in ExplosionParticleDirections:
        temp_particle = game.create_sprite(SpaceDestroyer.get(LedSpriteProperty.X), 0)
        temp_particle.set(LedSpriteProperty.DIRECTION, direction)
        ExplosionParticles.append(temp_particle)
    SpaceDestroyer.delete()
    score += 1
    spawnSpaceDestroyer()
def PlaySound(sound: str):
    if soundOn:
        pass
def DeleteGarbage():
    for finished_bullet in ActiveBullets:
        if finished_bullet.get(LedSpriteProperty.Y) == 0 and finished_bullet.get(LedSpriteProperty.BRIGHTNESS) == 0:
            finished_bullet.delete()
            if finished_bullet.is_deleted():
                ActiveBullets.shift()
    for finished_particle in ExplosionParticles:
        if finished_particle.get(LedSpriteProperty.Y) <= 4 and finished_particle.get(LedSpriteProperty.BRIGHTNESS) == 0:
            finished_particle.delete()
            if finished_particle.is_deleted():
                ExplosionParticles.shift()
def startGame():
    global menuActive, Spaceship, gameStarted
    menuActive = False
    game.set_life(5)
    Spaceship = game.create_sprite(2, 4)
    spawnSpaceDestroyer()
    gameStarted = True

def on_button_pressed_a():
    if menuActive:
        navigateMenu(-1)
    else:
        Spaceship.change(LedSpriteProperty.X, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def confirmMenu():
    global soundOn
    if MenuItems[menuIndex] == "SOUND":
        if soundOn:
            soundOn = False
        else:
            soundOn = True
        showMenuItem("SOUND")
    if MenuItems[menuIndex] == "START":
        startGame()
def introTrailer():
    global introActive
    basic.show_leds("""
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        """)
    basic.show_leds("""
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        """)
    basic.show_leds("""
        . # . . .
        . . . . .
        . . . . .
        . # . . .
        . # . . .
        """)
    basic.show_leds("""
        . # . . .
        . . . . .
        . # . . .
        . . . . .
        . # . . .
        """)
    basic.show_leds("""
        . # . . .
        . # . . .
        . . . . .
        . . . . .
        . # . . .
        """)
    basic.show_leds("""
        . # # . .
        . . # . .
        . . . . .
        . . . . .
        . # . . .
        """)
    basic.show_leds("""
        . . # # .
        . . # . .
        . . . # .
        . . . . .
        . # . . .
        """)
    basic.show_leds("""
        # . . # #
        . . . . .
        . . . # .
        . . . . #
        . # . . .
        """)
    basic.show_leds("""
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        """)
    basic.show_leds("""
        # . . . .
        . . . . .
        . . . . .
        # . . . .
        # . . . .
        """)
    basic.show_leds("""
        # . . . .
        . . . . .
        # . . . .
        . . . . .
        # . . . .
        """)
    basic.show_leds("""
        # . . . .
        # . . . .
        . . . . .
        . . . . .
        # . . . .
        """)
    basic.show_leds("""
        # # . . .
        . # . . .
        . . . . .
        . . . . .
        # . . . .
        """)
    basic.show_leds("""
        . # # . .
        . # . . .
        . . # . .
        . . . . .
        # . . . .
        """)
    basic.show_leds("""
        . # # # .
        . # . . .
        . . # . .
        . . . # .
        # . . . .
        """)
    basic.show_leds("""
        . . # # #
        . . . . .
        . . # . .
        . . . # .
        # . . . #
        """)
    basic.show_leds("""
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        """)
    basic.show_leds("""
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        """)
    basic.show_leds("""
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . # .
        """)
    basic.show_leds("""
        . . . . #
        . . . . #
        . . . . .
        . . . . .
        . . . . #
        """)
    basic.show_leds("""
        . . . . #
        . . . . .
        . . . . #
        . . . . .
        . . . . #
        """)
    basic.show_leds("""
        . . . . #
        . . . . .
        . . . . .
        . . . . #
        . . . . #
        """)
    basic.show_leds("""
        . . . . #
        . . . . .
        . . # . .
        . . . # .
        . . # # #
        """)
    basic.show_leds("""
        . . . . #
        . # . . .
        . . # . #
        . . . # #
        . . # # #
        """)
    basic.show_leds("""
        . . . . #
        . # . # #
        . . # # #
        . . # # #
        . # # # #
        """)
    basic.show_leds("""
        # . # # #
        . # # # #
        . # # # #
        . # # # #
        # # # # #
        """)
    basic.show_leds("""
        # # # # #
        . # # # #
        # # # # #
        # # # # #
        # # # # #
        """)
    basic.show_leds("""
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        """)
    basic.show_leds("""
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # . # . #
        """)
    basic.show_leds("""
        # # # # #
        # # # # #
        # # # # #
        # . # . #
        . . . . .
        """)
    basic.show_leds("""
        # # # # #
        # # # # #
        . # . # .
        . . . . .
        . . . . .
        """)
    basic.show_leds("""
        # # # # #
        # . # . #
        . . . . .
        . . . . .
        . . . . .
        """)
    basic.show_leds("""
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        """)
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        """)
    basic.show_leds("""
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        # # # # #
        """)
    basic.show_leds("""
        . . . . .
        . . # . .
        . # # # .
        # # # # #
        # . # . #
        """)
    introActive = False
    initMenu()
def startIntro():
    introTrailer()
def sounds():
    music.play(music.create_sound_expression(WaveShape.SQUARE,
            1,
            3597,
            255,
            0,
            500,
            SoundExpressionEffect.NONE,
            InterpolationCurve.LINEAR),
        music.PlaybackMode.UNTIL_DONE)
    music.play(music.create_sound_expression(WaveShape.SAWTOOTH,
            411,
            136,
            255,
            255,
            100,
            SoundExpressionEffect.TREMOLO,
            InterpolationCurve.LOGARITHMIC),
        music.PlaybackMode.UNTIL_DONE)
    music.play(music.string_playable("B A A B D C D E ", 200),
        music.PlaybackMode.LOOPING_IN_BACKGROUND)
    music.play(music.string_playable("B A G F - - - - ", 150),
        music.PlaybackMode.UNTIL_DONE)
    music.play(music.create_sound_expression(WaveShape.SQUARE,
            1757,
            0,
            255,
            0,
            500,
            SoundExpressionEffect.NONE,
            InterpolationCurve.LINEAR),
        music.PlaybackMode.UNTIL_DONE)
    music.play(music.create_sound_expression(WaveShape.SAWTOOTH,
            5000,
            1317,
            255,
            16,
            200,
            SoundExpressionEffect.TREMOLO,
            InterpolationCurve.LOGARITHMIC),
        music.PlaybackMode.UNTIL_DONE)
    music.play(music.create_sound_expression(WaveShape.NOISE,
            1757,
            0,
            255,
            0,
            500,
            SoundExpressionEffect.NONE,
            InterpolationCurve.LINEAR),
        music.PlaybackMode.UNTIL_DONE)
    music.stop_all_sounds()

def on_button_pressed_ab():
    global introActive
    if introActive:
        introActive = False
    elif menuActive:
        confirmMenu()
    else:
        SpaceShipFire()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    if menuActive:
        navigateMenu(1)
    else:
        Spaceship.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

def initMenu():
    global menuActive, MenuItems, menuIndex
    menuActive = True
    MenuItems = ["START", "SOUND", "SPEED"]
    menuIndex = 0
    menuActive = True
    showMenuItem("START")
def spawnSpaceDestroyer():
    global SpaceDestroyer
    SpaceDestroyer = game.create_sprite(randint(0, 4), 0)
def navigateMenu(direction2: number):
    global menuIndex
    menuIndex += direction2
    if menuIndex < 0:
        menuIndex = len(MenuItems) - 1
    if menuIndex >= len(MenuItems):
        menuIndex = 0
    showMenuItem(MenuItems[menuIndex])
def EnemyFire():
    ActiveEnemyFire.append(game.create_sprite(SpaceDestroyer.get(LedSpriteProperty.X),
            SpaceDestroyer.get(LedSpriteProperty.Y) + 1))
menuIndex = 0
MenuItems: List[str] = []
gameStarted = False
menuActive = False
score = 0
temp_particle: game.LedSprite = None
soundOn = False
Spaceship: game.LedSprite = None
SpaceDestroyer: game.LedSprite = None
ActiveBullets: List[game.LedSprite] = []
ExplosionParticleDirections: List[number] = []
ExplosionParticles: List[game.LedSprite] = []
ActiveEnemyFire: List[game.LedSprite] = []
introActive = False
temp_pos = 0
menuSpeed = 100
gameSpeed = 100
enemySpeed = 200
enemyFireSpeed = 3500
garbageCollectorSpeed = 3000
introActive = True
ActiveEnemyFire = []
ExplosionParticles = []
ExplosionParticleDirections = [-135, 135, 45, -45]
startIntro()

def on_every_interval():
    DeleteGarbage()
loops.every_interval(garbageCollectorSpeed, on_every_interval)

def on_every_interval2():
    if gameStarted:
        EnemyFire()
loops.every_interval(enemyFireSpeed, on_every_interval2)

def on_every_interval3():
    if gameStarted:
        UpdateSpace()
loops.every_interval(gameSpeed, on_every_interval3)
