import { mdToAst } from "./mdToAst.ts"
import { mdAstToHtmlAst } from "./mdAstToHtmlAst.ts"
import { htmlAstToHtml } from "./htmlAstToHtml.ts"

export const mdToHtml = (source: string) => {
    const ast = mdToAst(source)
    const htmlAst = mdAstToHtmlAst(ast)
    return htmlAstToHtml(htmlAst)
}
