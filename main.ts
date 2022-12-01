player.onChat("run", function () {
    blocks.place(GRASS, CodeCosmos.positionBelowAgent())
    CodeCosmos.startingPosition(world(0, 0, 0))
})
