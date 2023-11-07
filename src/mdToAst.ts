import type { MdNode, MdHeadingNode, MdParagraphNode } from "./types.ts"

export const mdToAst = (source: string) => {
    const ast: MdNode[] = []

    source.split("\n").forEach(line => {
        line = line.trim()
        if (!line) return

        if (line.startsWith("#")) {
            ast.push(parseHeading(line))
        } else {
            ast.push(parseParagraph(line))
        }
    })

    return ast
}

function parseHeading(line: string): MdHeadingNode {
    let level: MdHeadingNode["level"] = 1

    if (line.startsWith("######")) {
        level = 6
    } else if (line.startsWith("#####")) {
        level = 5
    } else if (line.startsWith("####")) {
        level = 4
    } else if (line.startsWith("###")) {
        level = 3
    } else if (line.startsWith("##")) {
        level = 2
    }

    return {
        type: "heading",
        level,
        content: line.slice(level).trim(),
    }
}

function parseParagraph(line: string): MdParagraphNode {
    return {
        type: "paragraph",
        content: line,
    }
}
