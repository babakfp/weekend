type HeadingNode = {
    name: "heading"
    level: 1 | 2 | 3 | 4 | 5 | 6
    content: string
}

type ParagraphNode = {
    name: "paragraph"
    content: string
}

type Node = HeadingNode | ParagraphNode

export class Weekend {
    convertStringToAST(source: string) {
        const ast: Node[] = []
        source.split("\n").forEach(line => {
            line = line.trim()

            if (!line) return

            if (line.startsWith("#")) {
                let level: HeadingNode["level"] = 1

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

                ast.push({
                    name: "heading",
                    level,
                    content: line.slice(level).trim(),
                })
            } else {
                ast.push({
                    name: "paragraph",
                    content: line,
                })
            }
        })
        return ast
    }
}
