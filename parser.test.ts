import { Weekend } from "./parser.ts"

const PATH_TO_SOURCE_FILE = "./syntax.txt"
const text = await Deno.readTextFile(PATH_TO_SOURCE_FILE)

const parser = new Weekend()
const ast = parser.convertStringToAST(text)

console.log(ast)
