/* eslint-disable react/prop-types */
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const RichTextRender = ({ content }) => {
    return (
        <div>
            {documentToReactComponents(content)}
        </div>
    )
}

export default RichTextRender