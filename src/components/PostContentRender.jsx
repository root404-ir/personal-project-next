/* eslint-disable react/prop-types */
import { MARKS, BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { PostOptionContext } from "@/contexts/PostOptionContext";
import { useContext, useEffect, useRef, useState } from "react";
import { TbCopy, TbCopyCheck } from "react-icons/tb";
import toast from "react-hot-toast";
import { highlightCode } from "./HighliteCode";


export const PostContentRender = ({ content }) => {
    const { fontSize } = useContext(PostOptionContext);
    const [isCopy, setIsCopy] = useState({})

    const handleCopyCode = (key, code) => {
        navigator.clipboard.writeText(code)
        setIsCopy(prev => ({ ...prev, [key]: true }))
        toast.success('کد کپی شد!')
        setTimeout(() => {
            setIsCopy(prev => ({ ...prev, [key]: false }))
        }, 2000)
    }
    const generateKey = (text) => {
        return text.slice(0, 10) + text.length
    }
    const options = {
        renderMark: {
            [MARKS.CODE]: text => {
                const codeKey = generateKey(text)
                const [highlighted, setHighlighted] = useState(null)
                useEffect(() => {
                    highlightCode(text, 'js').then(setHighlighted)
                }, [text])
                return (
                    <div dir="ltr" className="text-left my-10 relative whitespace-pre-wrap leading-relaxed">
                        <pre className="bg-transparent p-0 overflow-x-auto">
                            {highlighted ? (
                                <div className="shiki" dangerouslySetInnerHTML={{ __html: highlighted }}></div>
                            ) : (
                                <code dir="ltr" className="text-gray-400 block">{text}</code>
                            )}
                        </pre>
                        <button onClick={() => handleCopyCode(codeKey, text)} className="absolute top-2 right-2 text-white hover:text-green-400 flex justify-end transition duration-300 ease-in-out">
                            {isCopy[codeKey] ? <TbCopyCheck size={18} /> : <TbCopy size={18} />}
                        </button>
                    </div>
                )
            },
        },
        renderNode: {
            [BLOCKS.TABLE]: (node, children) => (
                <table className="table-auto border-collapse border border-gray-400 my-4 w-full">
                    {children}
                </table>
            ),
            [BLOCKS.TABLE_ROW]: (node, children) => (
                <tr className="border border-gray-300">{children}</tr>
            ),
            [BLOCKS.TABLE_CELL]: (node, children) => (
                <td className="border px-3 border-gray-300">{children}</td>
            ),
            [BLOCKS.HEADING_1]: (node, children) => (
                <h1 className="text-cyan-400 text-3xl mt-20">{children}</h1>
            ),
            [BLOCKS.PARAGRAPH]: (node, children) => (
                <p className="text-gray-300" style={{ fontSize }}>{children}</p>
            )
        }
    }
    return (
        <div className="space-y-6" >
            <div>{documentToReactComponents(content, options)}</div>

        </div >
    )
}
