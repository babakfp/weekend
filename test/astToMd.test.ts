import { mdToAst } from "../src/mdToAst.ts"
import { astToMd } from "../src/astToMd.ts"

const PATH_TO_SOURCE_FILE = "./syntax.txt"

const srcMd = await Deno.readTextFile(PATH_TO_SOURCE_FILE)
const ast = mdToAst(srcMd)
const md = astToMd(ast)

console.log(md)
