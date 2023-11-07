import { mdToHtml } from "../src/mdToHtml.ts"

const PATH_TO_SOURCE_FILE = "./syntax.txt"

const srcMd = await Deno.readTextFile(PATH_TO_SOURCE_FILE)
const html = mdToHtml(srcMd)

console.log(html)
