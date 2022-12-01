//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {
    //% block="unlockWorld code:$code"
    //% block.loc.nl="ontgrendelWereld $code"
    export function unlockWorld(code: string) {
        if (code === "code123") {
            player.execute("execute @a[tag=!unlocked] ~ ~ ~ dialogue change @e[tag=claire1] claire1")
            player.execute("execute @a[tag=!unlocked] ~ ~ ~ say Unlocked!")
            player.execute("execute @a[tag=!unlocked] ~ ~ ~ tag @a add unlocked")
        } else {
            player.execute("tag @a remove unlocked");
        }
    }

    //% block="startingPosition position:$position"
    //% block.loc.nl="zetKlaar positie:$position"
    export function startingPosition(position:Position) {
        player.execute("function levels/startingPositions");
        agent.teleport(position, SOUTH);
    }

    //% block="position below agent"
    //% block.loc.nl="positie onder agent"
    export function positionBelowAgent() {
        return world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
    }

    
}