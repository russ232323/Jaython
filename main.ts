//  =============================
//  PARALARI TOPLA
//  =============================
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function on_on_overlap(hero_sprite2: Sprite, coin_sprite: Sprite) {
    info.changeScoreBy(0)
    coin_sprite.destroy(effects.spray, 100)
    if (info.score() >= 5) {
        game.over(false, effects.confetti)
    }
    
})
//  =============================
//  DÜŞMAN VURUŞU
//  =============================
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function on_on_overlap2(hero_sprite: Sprite, enemy_sprite: Sprite) {
    info.changeLifeBy(-1)
    enemy_sprite.destroy(effects.fire, 100)
})
let coin : Sprite = null
let enemy : Sprite = null
//  =============================
//  KUKLA(KARAKTERLER) RESİMLERİ
//  =============================
let hero_image = img`
    . . . . . . . .
    . . . 2 2 . . .
    . . 2 2 2 2 . .
    . . 2 2 2 2 . .
    . . . 2 2 . . .
    . . 2 . . 2 . .
    . 2 . . . . 2 .
    . . . . . . . .
    `
let coin_image = img`
    . . . . . . . .
    . . . 5 5 . . .
    . . 5 5 5 5 . .
    . . 5 4 4 5 . .
    . . 5 4 4 5 . .
    . . 5 5 5 5 . .
    . . . 5 5 . . .
    . . . . . . . .
    `
let enemy_image = img`
    . . . . . . . .
    . . 7 7 7 7 . .
    . 7 f 7 7 f 7 .
    . 7 7 f f 7 7 .
    . 7 f f f f 7 .
    . 7 f 7 7 f 7 .
    . . 7 7 7 7 . .
    . . . . . . . .
    `
//  =============================
//  BAŞLANGIÇ EKRANI
//  =============================
game.splash("Basit bir Yarış Oyunu", "Başlamak için BOŞLUK tuşuna basın")
//  =============================
//  OYUN KURULUMU
//  =============================
scene.setBackgroundColor(9)
info.setScore(0)
info.setLife(3)
//  =============================
//  KAHRAMAN
//  =============================
let hero = sprites.create(hero_image, SpriteKind.Player)
hero.setPosition(25, 60)
hero.setStayInScreen(true)
controller.moveSprite(hero, 0, 100)
//  =============================
//  DÜŞMANLAR YARATMA
//  =============================
game.onUpdateInterval(1400, function on_update_interval() {
    
    enemy = sprites.create(enemy_image, SpriteKind.Enemy)
    enemy.setPosition(155, randint(15, 105))
    enemy.setVelocity(-90, 0)
    enemy.setFlag(SpriteFlag.AutoDestroy, true)
})
//  =============================
//  PARALARI YARATMA
//  =============================
game.onUpdateInterval(900, function on_update_interval2() {
    
    coin = sprites.create(coin_image, SpriteKind.Food)
    coin.setPosition(155, randint(15, 105))
    coin.setVelocity(-70, 0)
    coin.setFlag(SpriteFlag.AutoDestroy, true)
})
