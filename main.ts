namespace SpriteKind {
    export const camera = SpriteKind.create()
    export const ending = SpriteKind.create()
}
scene.onHitTile(SpriteKind.Player, 6, function (sprite) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(Math.randomRange(1, 2))
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (Red || Blue) {
        hpEnemy += -1
        sprite.destroy()
        if (hpEnemy <= 0) {
            if (Red) {
                otherSprite.destroy()
                info.player1.changeScoreBy(1)
                hpEnemy = 5
            } else if (Blue) {
                otherSprite.destroy()
                info.player2.changeScoreBy(1)
                hpEnemy = 5
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ending, function (sprite, otherSprite) {
    game.over(false)
})
function player1 () {
    mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 8 8 8 8 8 8 8 . . . . . . . 
. . 8 8 8 8 8 8 8 8 . . . . . . 
. . 8 8 8 8 8 8 1 8 8 . . . . . 
. . 8 8 8 8 8 8 8 8 8 8 . . . . 
. . 8 8 8 8 8 8 8 8 8 8 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    controller.moveSprite(mySprite, 80, 80)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 8))
    info.player1.setLife(6)
    mySprite.setFlag(SpriteFlag.Ghost, false)
    mySprite.setFlag(SpriteFlag.StayInScreen, true)
}
function map () {
    game.splash("BLUE: WASD", "RED: IJKL")
    scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f . . . . . . . . . . 7 7 7 . 5 . . . . . . . 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f 
f . . . . . . . . . . 7 7 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f 
f . . . . . . . . . . 7 7 7 . . . . . . . . . . . . . . . 5 . . . . . 5 . . . . . . 5 . . . . . 5 . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f 
f . . . . . . . . . . 7 7 7 . 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 7 7 7 . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . f 
f . . . . . . . . . . 7 7 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3 3 3 . 8 . 3 3 3 3 3 3 3 3 3 3 . . 7 . 8 . . . . . . . . . . 7 7 . . . . . . 7 7 7 7 7 f 
f . . . . . . . . 5 . 7 7 7 . . . . . . . . . . 8 . . . . . . . . . 8 . . 8 . . . . . . . . . 8 . . . 7 7 . 8 . 8 . 7 7 7 7 7 . 7 7 7 . . 3 . 5 8 . . . . . . . . . 5 5 7 7 . . 7 7 5 5 5 . 6 f 
f . . . . . . . . . . . . . . 5 . . . 8 5 . . . . . . . . . . . . . . . . . 8 . . . . . . . . . 8 . . 7 . 8 . 7 . 8 . 7 7 7 . 8 . 7 . . . 7 . . 5 8 . . . . . . . . . . 5 5 7 7 5 5 . . . . 6 f 
f . . . . . 8 8 8 8 8 8 8 8 8 5 . . . . . 5 . . . . . . . . . . . . . . . . 8 . . . . 8 8 8 8 8 8 8 . . 8 . 7 7 7 . 8 . 7 . 8 . 8 8 . . . 7 . . . 5 8 . . . . . . . . . . . 5 5 . . . . . . 6 f 
f . . . . . . . . . . 7 7 7 . . . . . 8 . . . . . . . 8 . . . . . . . . . . 8 . . . . . . . . . 8 . . 8 . 7 7 7 7 7 . 8 . 8 . 7 7 7 7 . . 7 . 7 . . 5 8 . . . . 5 . . . . . . . . . . . . . 6 f 
f . . . . . . . . 5 . 7 7 7 . . . . . . . . . . . . . . . . . . . . 8 . . 8 . . . . . . . . . 8 . . . . 7 7 7 7 7 7 7 . 8 . 7 7 7 7 7 . . . . 7 7 . . 5 8 . . . . . . . . . 5 5 . . . . . . 6 f 
f . . . . . . . . . . 7 7 7 . 5 . . . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 . 7 7 7 7 7 7 . . . . 8 7 7 . . 5 8 . . . . . . 5 5 7 7 5 5 . . . . 6 f 
f . . . . . . . . . . 7 7 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 7 7 . . . . . . . 5 5 7 7 . . 7 7 5 5 5 . 6 f 
f . . . . . . . . . . 7 7 7 . . . . . . . . . . . . . . . 5 . . . . . 5 . . . . . . 5 . . . . . 5 . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . 7 7 . . . . . . 7 7 . . . . . . 7 7 7 7 7 f 
f . . . . . . . . . . 7 7 7 . 5 . . . . . . . 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . 7 7 7 7 7 7 7 . . . . . . . . . . . . . f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
    scene.setTile(8, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, false)
    scene.setTile(6, img`
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
. . . . . . 6 6 6 6 6 6 6 6 6 6 
. . . . . . . . 6 6 6 6 6 6 6 6 
. . . . . . . . . . 6 6 6 6 6 6 
. . . . . . . . . . . 6 6 6 6 6 
. . . . . . . . . . . 6 6 6 6 6 
. . . . . . . . . . . 6 6 6 6 6 
. . . . . . . . . . . 6 6 6 6 6 
. . . . . . . . . . . 6 6 6 6 6 
. . . . . . . . . . . 6 6 6 6 6 
. . . . . . . . . . 6 6 6 6 6 6 
. . . . . . . . . 6 6 6 6 6 6 6 
. . . . . . . 6 6 6 6 6 6 6 6 6 
. . . . . . 6 6 6 6 6 6 6 6 6 6 
. . . 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`, true)
    scene.setTile(5, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, false)
    scene.setTile(15, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, true)
    scene.setTile(7, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 1 2 1 2 2 2 2 2 2 2 2 1 2 1 
1 2 2 1 2 2 2 2 2 2 2 2 1 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 1 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 1 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 2 1 2 2 2 2 2 2 2 2 1 2 2 1 
1 2 1 2 2 2 2 2 2 2 2 1 2 1 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, true)
    scene.setTile(3, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 1 2 1 2 2 2 2 2 2 2 2 1 2 1 
1 2 2 1 2 2 2 2 2 2 2 2 1 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 1 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 1 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 2 1 2 2 2 2 2 2 2 2 1 2 2 1 
1 2 1 2 2 2 2 2 2 2 2 1 2 1 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, false)
    for (let value of scene.getTilesByType(5)) {
        spike = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . b b b b b b b b b b b b . . 
. . b f f f f f f f f f f b . . 
. . b f f f f f f f f f f b . . 
. . b f f f f f f f f f f b . . 
. . b f f f f f f f f f f b . . 
. . b f f 1 f f f 1 f f f b . . 
. . b f f f f f f f f f f b . . 
. . b f f f f f f f f f f b . . 
. . b f f f f f f f f f f b . . 
. . b f f f f f f f f f f b . . 
. . b f f f f f f f f f f b . . 
. . b b b b b b b b b b b b . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
        spike.setVelocity(0, 50)
        spike.setFlag(SpriteFlag.BounceOnWall, Math.percentChance(100))
        scene.place(value, spike)
    }
    for (let value of scene.getTilesByType(8)) {
        coin = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
        scene.place(value, coin)
    }
    hpEnemy = 5
}
function camera_follow () {
    screen1 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.camera)
    screen1.setVelocity(23, 0)
    tiles.placeOnTile(screen1, tiles.getTileLocation(4, 8))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (mySprite) {
        info.player1.changeLifeBy(-1)
        if (info.life() == 3) {
            sprite.destroy()
            total_Players += -1
        }
        sprite.x += -15
    } else if (mySprite2) {
        info.player2.changeLifeBy(-1)
        if (info.life() == 3) {
            sprite.destroy()
            total_Players += -1
        }
        sprite.x += -15
    }
})
function player2 () {
    mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 . . . . . . . 
. . 2 2 2 2 2 2 2 2 . . . . . . 
. . 2 2 2 2 2 2 1 2 2 . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 . . . . 
. . 2 2 2 2 2 2 2 2 2 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    controller.player2.moveSprite(mySprite2, 80, 80)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(2, 8))
    mySprite2.setFlag(SpriteFlag.StayInScreen, true)
}
scene.onHitTile(SpriteKind.Player, 7, function (sprite) {
    sprite.destroy(effects.disintegrate, 200)
    total_Players += -1
    if (total_Players <= 0) {
        game.over(false)
    }
})
info.onLifeZero(function () {
    game.over(false)
})
let myTile: number[] = []
let rokc: Sprite = null
let mySprite2: Sprite = null
let screen1: Sprite = null
let coin: Sprite = null
let spike: Sprite = null
let mySprite: Sprite = null
let hpEnemy = 0
let Blue: Sprite = null
let Red: Sprite = null
let total_Players = 0
map()
player1()
player2()
camera_follow()
total_Players = 2
game.onUpdateInterval(200, function () {
    Red = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f 2 2 f . . . . . . 
. . . . . . f 2 2 f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite2, 100, 0)
    Blue = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f 8 8 f . . . . . . 
. . . . . . f 8 8 f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite, 100, 0)
})
game.onUpdate(function () {
    scene.cameraFollowSprite(screen1)
})
game.onUpdateInterval(500, function () {
    rokc = sprites.createProjectileFromSprite(img`
a c c c c c c c c c c c c c c a 
c a c c c c c c c c c c c c a c 
c c a c c c c c c c c c c a c c 
c c c a c c c c c c c c a c c c 
c c c c a c c c c c c a c c c c 
c c c c c a c c c c a c c c c c 
c c c c c c a c c a c c c c c c 
c c c c c c c a a c c c c c c c 
c c c c c c c a a c c c c c c c 
c c c c c c a c c a c c c c c c 
c c c c c a c c c c a c c c c c 
c c c c a c c c c c c a c c c c 
c c c a c c c c c c c c a c c c 
c c a c c c c c c c c c c a c c 
c a c c c c c c c c c c c c a c 
a c c c c c c c c c c c c c c a 
`, spike, 0, -100)
    rokc.setKind(SpriteKind.ending)
    myTile = [1, 2]
})
