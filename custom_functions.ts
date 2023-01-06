//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {
    //% block="startingPosition position:$position"
    //% block.loc.nl="zetKlaar positie:$position"
    export function startingPosition(position:Position) {
        player.execute("function levels/startingPositions");
        agent.teleport(position, SOUTH);
    }

    //% block="position below agent"
    //% block.loc.nl_NL="positie onder agent"
    export function positionBelowAgent() {
        return world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
    }

    
}