import { mdToAst } from "../src/mdToAst.ts"

const PATH_TO_SOURCE_FILE = "./syntax.txt"

const srcMd = await Deno.readTextFile(PATH_TO_SOURCE_FILE)
const ast = mdToAst(srcMd)

console.log(ast)
