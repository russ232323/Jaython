# =============================
# PARALARI TOPLA
# =============================

def on_on_overlap(hero_sprite2, coin_sprite):
    info.change_score_by(0)
    coin_sprite.destroy(effects.spray, 100)
    if info.score() >= 5:
        game.over(False, effects.confetti)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

# =============================
# DÜŞMAN VURUŞU
# =============================

def on_on_overlap2(hero_sprite, enemy_sprite):
    info.change_life_by(-1)
    enemy_sprite.destroy(effects.fire, 100)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap2)

coin: Sprite = None
enemy: Sprite = None
# =============================
# KUKLA(KARAKTERLER) RESİMLERİ
# =============================
hero_image = img("""
    . . . . . . . .
    . . . 2 2 . . .
    . . 2 2 2 2 . .
    . . 2 2 2 2 . .
    . . . 2 2 . . .
    . . 2 . . 2 . .
    . 2 . . . . 2 .
    . . . . . . . .
    """)
coin_image = img("""
    . . . . . . . .
    . . . 5 5 . . .
    . . 5 5 5 5 . .
    . . 5 4 4 5 . .
    . . 5 4 4 5 . .
    . . 5 5 5 5 . .
    . . . 5 5 . . .
    . . . . . . . .
    """)
enemy_image = img("""
    . . . . . . . .
    . . 7 7 7 7 . .
    . 7 f 7 7 f 7 .
    . 7 7 f f 7 7 .
    . 7 f f f f 7 .
    . 7 f 7 7 f 7 .
    . . 7 7 7 7 . .
    . . . . . . . .
    """)
# =============================
# BAŞLANGIÇ EKRANI
# =============================
game.splash("Basit bir Yarış Oyunu", "Başlamak için BOŞLUK tuşuna basın")
# =============================
# OYUN KURULUMU
# =============================
scene.set_background_color(9)
info.set_score(0)
info.set_life(3)
# =============================
# KAHRAMAN
# =============================
hero = sprites.create(hero_image, SpriteKind.player)
hero.set_position(25, 60)
hero.set_stay_in_screen(True)
controller.move_sprite(hero, 0, 100)
# =============================
# DÜŞMANLAR YARATMA
# =============================

def on_update_interval():
    global enemy
    enemy = sprites.create(enemy_image, SpriteKind.enemy)
    enemy.set_position(155, randint(15, 105))
    enemy.set_velocity(-90, 0)
    enemy.set_flag(SpriteFlag.AUTO_DESTROY, True)
game.on_update_interval(1400, on_update_interval)

# =============================
# PARALARI YARATMA
# =============================

def on_update_interval2():
    global coin
    coin = sprites.create(coin_image, SpriteKind.food)
    coin.set_position(155, randint(15, 105))
    coin.set_velocity(-70, 0)
    coin.set_flag(SpriteFlag.AUTO_DESTROY, True)
game.on_update_interval(900, on_update_interval2)
