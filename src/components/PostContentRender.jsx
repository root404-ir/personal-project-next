/* eslint-disable react/prop-types */
import { MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const PostContentRender = ({ content }) => {
    const options = {
        renderMark: {
            [MARKS.CODE]: text => (
                <div className="w-full text-left">
                    <code className="bg-[#1e1e1e] text-[#dcdcaa] font-mono text-sm px-2 py-1 rounded border border-[#333]">{text}</code>
                </div>
            )
        }
    }
    return <div>{documentToReactComponents(content, options)}</div>
}