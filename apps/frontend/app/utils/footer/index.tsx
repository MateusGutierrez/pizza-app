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
                <div className="flex flex-col items-center gap-4">
                    <span className="text-gray-300"><a href="mailto:mateusgutierrez9@gmail.com">mateusgutierrez9@gmail.com</a></span> 
                    <span className="text-gray-300">(48) 98875-6690</span>
                </div>
            </div>
        </footer>
    )
}