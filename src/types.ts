export type MdHeadingNode = {
    type: "heading"
    level: 1 | 2 | 3 | 4 | 5 | 6
    content: string
}

export type MdParagraphNode = {
    type: "paragraph"
    content: string
}

export type MdNode = MdHeadingNode | MdParagraphNode

export type HtmlHeadingNode = {
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    children: HtmlTextNode[]
}

export type HtmlParagraphNode = {
    tag: "p"
    children: HtmlTextNode[]
}

export type HtmlTextNode = {
    children: string
}

export type HtmlNode = HtmlHeadingNode | HtmlParagraphNode
