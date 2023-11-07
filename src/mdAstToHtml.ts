import type { MdNode } from "./types.ts"
import { mdAstToHtmlAst } from "./mdAstToHtmlAst.ts"
import { htmlAstToHtml } from "./htmlAstToHtml.ts"

export const mdAstToHtml = (ast: MdNode[]) => {
    const htmlAst = mdAstToHtmlAst(ast)
    return htmlAstToHtml(htmlAst)
}
