//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {
    //% block="zet agent klaar op $position"
    export function startingPosition(position:Position=world(0,0,0)) {
        player.execute("function levels/startingPositions");
        agent.teleport(position, SOUTH);
    }

    //% block="positie onder agent"
    export function positionBelowAgent() {
        return world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
    }
    
}