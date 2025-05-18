import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
// import { TbBrandTailwind } from "react-icons/tb";
import { FaWordpressSimple } from "react-icons/fa";

const Icons = () => {
    return (
        <>
            <div className="flex justify-between text-5xl mt-4">
                <FaReact className="hover:bg-blue-600 hover:text-white rounded-full hover:p-2 transition-all" />
                <FaNode className="hover:bg-green-600 hover:text-white rounded-full hover:p-2 transition-all" />
                <FaGitAlt className="hover:bg-orange-600 hover:text-white rounded-full hover:p-2 transition-all" />
                <FaLinux className="hover:bg-yellow-300 dark:hover:text-black rounded-full hover:p-2 transition-all" />
                {/* <TbBrandTailwind className="hover:bg-blue-600 hover:text-white rounded-full hover:p-2 transition-all" /> */}
                <FaWordpressSimple className="hover:bg-gray-600 hover:text-white rounded-full hover:p-2 transition-all" />
            </div>
        </>
    )
}

export default Icons