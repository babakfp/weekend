import type { MdNode, HtmlNode } from "./types.ts"

export const mdAstToHtmlAst = (ast: MdNode[]) => {
    const result: HtmlNode[] = []

    ast.forEach(node => {
        if (node.type === "heading") {
            result.push({
                tag: `h${node.level}`,
                children: [
                    {
                        children: node.content,
                    },
                ],
            })
        } else if (node.type === "paragraph") {
            result.push({
                tag: "p",
                children: [
                    {
                        children: node.content,
                    },
                ],
            })
        }
    })

    return result
}
