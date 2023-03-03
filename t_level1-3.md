### @hideIteration true
### @flyoutOnly true
# Missie 5 (v1.1)
```blocks
player.onChat("jump", function () {
agent.getPosition()
    CodeCosmosEN.startingPosition(world(0, 0, 0))
    blocks.place(GRASS, CodeCosmosEN.positionBelowAgent())
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
    CodeCosmosEN.startingPosition(world(0, 0, 0))
})
```

## Velden bouwen
Use the learning platform to solve the exercise.