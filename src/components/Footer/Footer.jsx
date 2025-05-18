import Menu from "../NavBar/Menu"
import { DiGithubFull } from "react-icons/di";
import { FaTelegram } from "react-icons/fa";
import { FaRobot } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-blue-900">
            <div className="grid lg:grid-cols-3 container mx-auto">
                <h4 className="text-lg md:text-xl mt-10 text-center md:text-right">
                    این وبسایت شخصی من است  محمد تفقدی صفرپور برنامه نویس فول استک
                </h4>
                <div className="flex flex-col items-center mt-10">
                    <h4 className="text-4xl text-green-400">منو</h4>
                    <ul className="flex flex-col items-center mt-5 gap-5">
                        <Menu />
                    </ul>
                </div>
                <div className="flex flex-col mt-10 items-center">
                    <h4 className="text-xl md:text-4xl text-green-400">شبکه های اجتماعی</h4>
                    <ul className="flex gap-10 mt-10 md:text-4xl text-2xl">
                        <li>
                            <a
                                href="https://github.com/root404-ir"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <DiGithubFull />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://t.me/root404"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Telegram"
                            >
                                <FaTelegram />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://t.me/mtjsBot"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Telegram Bot"
                            >
                                <FaRobot />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center border-t mt-10">
                <h4 className="flex flex-row-reverse items-center gap-2 text-2xl">
                    follow me on <DiGithubFull className="text-8xl text-green-400" />
                </h4>
            </div>
        </div>
    )
}

export default Footer
