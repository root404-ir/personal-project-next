/* eslint-disable react/prop-types */
import { useState } from "react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

export const CodePostBlock = ({ language = 'javascript', value = '' }) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(value)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="relative my-4 rounded-xl overflow-hidden bg-[#1e1e1e]">
            <button
                onClick={handleCopy}
                className="absolute right-2 top-2 bg-black bg-opacity-40 text-white px-2 py-1 rounded text-sm hover:bg-opacity-70 transition"
            >
                {copied ? 'Copied!' : 'کپی'}
            </button>
            <SyntaxHighlighter language={language} style={vscDarkPlus} customStyle={{ padding: '1em', margin: 0 }}>
                {value}
            </SyntaxHighlighter>
        </div>
    )
}