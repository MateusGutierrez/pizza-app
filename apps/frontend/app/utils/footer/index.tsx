import { Github } from "./socialMedia/github"
import { Linkedin } from "./socialMedia/linkedin"

export const Footer = () => {
    return (
        <footer className="flex bg-color5 h-[200px] w-full">
            <div className="flex flex-col items-center gap-9 justify-center m-auto w-[75%]">
                <div className="flex gap-[4rem] w-fit">
                    <Linkedin/>
                    <Github/>
                </div>
            </div>
        </footer>
    )
}