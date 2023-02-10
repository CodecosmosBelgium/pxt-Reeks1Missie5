### @hideIteration true
### @flyoutOnly true
# Missie 5 (v1.1)
```blocks
player.onChat("jump", function () {
agent.getPosition()
    CodeCosmos.startingPosition(world(0, 0, 0))
    blocks.place(GRASS, CodeCosmos.positionBelowAgent())
    blocks.place(GRASS, agent.getPosition())
    while (blocks.testForBlock(RED_SANDSTONE, world(0, 0, 0))) {
        blocks.place(GRASS, world(0, 0, 0))
        agent.move(FORWARD, 1)
        agent.turn(LEFT_TURN)
    }
        for (let index = 0; index < 4; index++) {}
})

```

```template
player.onChat("level1", function() {
    
})
```

## Velden bouwen

Gebruik het leerplatform om de oefeningen op te lossen.