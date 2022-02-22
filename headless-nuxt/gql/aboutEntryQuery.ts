const aboutEntryQueryGql = `
    query {
        entry(section: "about") {
            id
            slug
            title
            ... on about_about_Entry {
                bodyContent {
                    ... on bodyContent_richText_BlockType {
                        id
                        typeHandle
                        richText
                    }
                    ... on bodyContent_quote_BlockType {
                        id
                        typeHandle
                        style
                        quote
                        attribution
                    }
                }
            }
        }
    }
`
export default aboutEntryQueryGql
