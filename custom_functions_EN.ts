//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmosEN {
    //% block="startingPosition $position"
    export function startingPosition(position: Position = world(0, 0, 0)) {
        player.execute("function levels/startingPositions");
        agent.teleport(position, SOUTH);
    }

    //% block="position below agent"
    export function positionBelowAgent() {
        return world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
    }

}