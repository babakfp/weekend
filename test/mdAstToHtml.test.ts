import { mdToAst } from "../src/mdToAst.ts"
import { mdAstToHtml } from "../src/mdAstToHtml.ts"

const PATH_TO_SOURCE_FILE = "./syntax.txt"

const srcMd = await Deno.readTextFile(PATH_TO_SOURCE_FILE)
const mdAst = mdToAst(srcMd)
const html = mdAstToHtml(mdAst)

console.log(html)
