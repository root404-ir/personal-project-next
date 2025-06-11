import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { FaWordpressSimple } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandTailwind } from "react-icons/tb";
import { AiOutlineLinux } from "react-icons/ai";

const Icons = () => {
    return (
        <>
            <div className="flex justify-between items-center text-5xl mt-4">
                <TbBrandNextjs className="hover:bg-black hover:text-white rounded-full hover:p-2 transition-all" />
                <FaNodeJs className="hover:bg-green-600 hover:text-white rounded-full hover:p-2 transition-all" />
                <FaGitAlt className="hover:bg-orange-600 hover:text-white rounded-full hover:p-2 transition-all" />
                <FaReact className="header-icon p-2 bg-white text-blue-500 rounded-full " size={70} />
                <AiOutlineLinux className="hover:bg-yellow-300 dark:hover:text-black rounded-full hover:p-2 transition-all" />
                <TbBrandTailwind className="hover:bg-blue-600 hover:text-white rounded-full hover:p-2 transition-all" />
                <FaWordpressSimple className="hover:bg-gray-600 hover:text-white rounded-full hover:p-2 transition-all" />
            </div>
        </>
    )
}

export default Icons