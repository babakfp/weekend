import type { HtmlNode } from "./types.ts"

export const htmlAstToHtml = (htmlAst: HtmlNode[]): string => {
    let result = ""

    htmlAst.forEach(node => {
        result += `<${node.tag}>${node.children[0].children}</${node.tag}>`
    })

    return result
}
