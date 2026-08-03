
# UberSpaceBoy

A retro-style space shooter for the BBC micro:bit, built by sjoerdzvz and his son tencezvz. Steer a spaceship along the bottom row of the LED matrix with buttons A/B, shoot down enemies that spawn from the top, and rack up points as explosions burst into particles across the 5x5 grid.

The project leans on old-school game mechanics adapted to the micro:bit's tiny 5x5 LED display: sprites for the ship, bullets, enemies, and explosion particles are animated using `loops.everyInterval` timing loops, and a dedicated garbage-collection loop (`DeleteGarbage`) prunes finished sprites so the game keeps running smoothly without leaking memory. Sound effects are generated with `music.createSoundExpression` for a chiptune feel, and there's a simple menu (start / sound / speed) navigated with the buttons.

It's fully usable as a MakeCode extension, so the same game can be explored and edited in the visual block editor as well as in TypeScript, making it a nice example for learning both game programming concepts and MakeCode/micro:bit development.

## Collision detection

All hit detection uses the micro:bit game sprite library's built-in `isTouching()` and `isTouchingEdge()` checks — no manual coordinate math needed. A few examples from `main.ts`:

Player bullet hits an enemy:

```ts
if (bullet.isTouching(SpaceDestroyer)) {
    bullet.delete()
    EnemyExplode()
}
```

Enemy bullet hits the player's ship:

```ts
if (enemyBullet.isTouching(Spaceship)) {
    game.removeLife(1)
    enemyBullet.delete()
    PlaySound("SPACEBOY_HIT")
    ActiveEnemyFire.splice(ActiveEnemyFire.indexOf(enemyBullet), 1)
}
```

Explosion particles fading out as they reach the edge of the screen:

```ts
if (particle.isTouchingEdge()) {
    particle.change(LedSpriteProperty.Brightness, -60)
    particle.move(1)
}
```

Because every bullet, enemy, and particle is a real sprite, collisions "just work" the same way regardless of how many are on screen at once — the timing loop just walks the active sprite lists each tick and checks each one.
