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

    //% block="startingPosition x:$x y:$y z:$z"
    //% block.loc.nl="zetKlaar x:$x y:$y z:$z"
    export function startingPosition(x:number, y:number, z:number) {
        player.execute("function levels/startingPositions");
        agent.teleport(world(x, y, z), EAST);
    }

    //% block="detectSandstone"
    //% block.loc.nl="detecteerZandsteen"
    export function detectSandstone() {
        return blocks.testForBlock(RED_SANDSTONE, world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z)))
    }

    
}