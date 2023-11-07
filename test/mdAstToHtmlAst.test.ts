import { mdToAst } from "../src/mdToAst.ts"
import { mdAstToHtmlAst } from "../src/mdAstToHtmlAst.ts"

const PATH_TO_SOURCE_FILE = "./syntax.txt"

const srcMd = await Deno.readTextFile(PATH_TO_SOURCE_FILE)
const mdAst = mdToAst(srcMd)
const htmlAst = mdAstToHtmlAst(mdAst)

console.log(htmlAst)
