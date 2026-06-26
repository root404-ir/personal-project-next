import { MDXRemote } from "next-mdx-remote/rsc"

const component = {
    h1: (props) => <h1 className="text-3xl font-bold my-4" {...props} />,
    h2: (props) => <h2 className="text-2xl font-semibold my-3" {...props} />,
    p: (props) => <p className="leading-8 my-2" {...props} />,
    code: (props) => <code className="bg-gray-800 text-green-300 px-2 py-1 rounded" {...props} />,
    pres: (props) => <pre className="bg-black text-white p-4 rounded overflow-x-auto my-4" {...props} />
}

export default function PostContentRender({ content }) {
    return (
        <>
            <MDXRemote source={content} components={component} />
        </>
    )
}