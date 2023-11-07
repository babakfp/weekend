import type { MdNode } from "./types.ts"

export const astToMd = (ast: MdNode[]) => {
    let result = ""

    ast.forEach((node, i) => {
        if (node.type === "heading") {
            let hashes = ""
            for (let i = 0; i < node.level; i++) {
                hashes += "#"
            }
            result += `${hashes} ${node.content}`
            if (i !== ast.length - 1) {
                result += "\n\n"
            } else {
                result += "\n"
            }
        } else if (node.type === "paragraph") {
            result += node.content
            if (i !== ast.length - 1) {
                result += "\n\n"
            } else {
                result += "\n"
            }
        }
    })

    return result
}
