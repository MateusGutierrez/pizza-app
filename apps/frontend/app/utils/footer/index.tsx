import Link from "next/link"
import { Github } from "./socialMedia/github"
import { Linkedin } from "./socialMedia/linkedin"

export const Footer = () => {
    return (
        <footer className="flex bg-color5 h-[150px] w-full">
            <div className="flex items-center gap-9 justify-between m-auto w-[80%]">
                <div className="flex gap-[4rem] w-fit">
                    <Linkedin/>
                    <Github/>
                </div>
                <div className="flex gap-[4rem] w-fit">
                    <Link href="mailto:mateusgutierrez9@gmail.com">
                        <span className="text-secondary">mateusgutierrez9@gmail.com</span>
                    </Link>
                    <span className="text-secondary">+55 (48) 98875-6690</span>
                </div>
            </div>
        </footer>
    )
}