'use client'
import { useContext, useEffect, useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { PostOptionContext } from "../contexts/PostOptionContext";
import gsap from "gsap";
const PostOptions = () => {

    const { setFontSize, setFontWeight, setLineSpacing } = useContext(PostOptionContext)
    const [settingOpen, setSettingOpen] = useState(false)

    useEffect(() => {
        if (settingOpen) {
            gsap.to('#setting_section', { x: -100 })
        } else {
            gsap.to('#setting_section', { x: 0 })
        }
    }, [settingOpen])
    return (
        <div>
            <div onClick={() => setSettingOpen(!settingOpen)} className="cursor-pointer text-white bg-black fixed top-1/2 transform -translate-y-1/2 p-2 rounded-full">
                <IoSettingsSharp size={32} className={`${settingOpen ? 'rotate-90' : 'rotate-0'} transition-all`} />
            </div>
            {settingOpen && (
                <div id="setting_section" className="bg-purple-300 dark:bg-green-300 flex flex-col justify-between fixed top-1/2 right-0 text-black w-auto h-auto p-4 rounded-lg">
                    <p>شخصی سازی متن مقاله</p>
                    <div className="flex flex-col gap-4">
                        <div className="mt-5">
                            <select onChange={(e) => setFontSize(e.target.value)} className="border border-gray-400 w-full rounded-lg">
                                <option value="">سایز فونت</option>
                                <option value={'1.2rem'} >سایز 24</option>
                                <option value={'1.8rem'} >سایز 44</option>
                                <option value={'2rem'} >سایز 56</option>
                            </select>
                        </div>
                        <div>
                            <select onChange={(e) => setFontWeight(e.target.value)} className="border border-gray-400 w-full rounded-lg">
                                <option value="">میزان ضخامت متن</option>
                                <option value={'300'}>باریک</option>
                                <option value={'900'}>پررنگ</option>
                            </select>
                        </div>
                        <div>
                            <select onChange={(e) => setLineSpacing(e.target.value)} className="border border-gray-400 w-full rounded-lg">
                                <option value="">فاصله بین خطوط</option>
                                <option value={'50px'}>خیلی کم</option>
                                <option value={'60px'}>کم</option>
                                <option value={'70px'}>متوسط</option>
                                <option value={'80px'}>زیاد</option>
                                <option value={'90px'}>خیلی زیاد</option>
                            </select>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PostOptions