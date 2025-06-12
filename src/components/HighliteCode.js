import { createHighlighter } from 'shiki'
let highliter;

export const highlightCode = async (code, lang = 'js') => {
    if (!highliter) {
        highliter = await createHighlighter({
            themes: ['dracula'],
            langs: ['js', 'bash', 'shell', 'css', 'haml']
        })
    }
    return highliter.codeToHtml(code, {
        lang,
        theme: 'dracula'
    })
}