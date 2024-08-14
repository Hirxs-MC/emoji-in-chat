import { BlockPermutation } from "@minecraft/server"

export function destroyBlock(block) {
    if (block != undefined) (
        block.setPermutation(BlockPermutation.resolve("minecraft:air"))
    )
}

export function destroyMultiBlock(block, size) {
    const fillPosition = [block.x, block.y, block.z]
    const fillSize = [block.x + size[0] - 1, block.y + size[1] - 1, block.z + size[2] - 1]
    const dimension = block.dimension

    dimension.runCommandAsync(`fill ${fillPosition.join(` `)} ${fillSize.join(` `)} air[]`)
    // console.warn(`fill ${fillPosition.join(` `)} ${fillSize.join(` `)} air[]`)
}

export function destroyMultiBlockCareful(block, size) {
    const fillPosition = [block.x, block.y, block.z]
    const fillSize = [block.x + size[0] - 1, block.y + size[1] - 1, block.z + size[2] - 1]
    const dimension = block.dimension
    const blockList = [`ff:pink_umbrella`, `ff:red_umbrella`, `ff:white_umbrella`]

    // :(
    dimension.runCommandAsync(`fill ${fillPosition.join(` `)} ${fillSize.join(` `)} air[] replace ff:pink_umbrella`)
    dimension.runCommandAsync(`fill ${fillPosition.join(` `)} ${fillSize.join(` `)} air[] replace ff:red_umbrella`)
    dimension.runCommandAsync(`fill ${fillPosition.join(` `)} ${fillSize.join(` `)} air[] replace ff:white_umbrella`)
    // console.warn(`fill ${fillPosition.join(` `)} ${fillSize.join(` `)} air[]`)
}