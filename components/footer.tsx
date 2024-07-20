import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";


export default function Footer() {
    return (
        <div className="container sticky top-full flex items-center justify-between text-primary p-4">
            <p className="text-sm">&copy;2024 leo</p>
            <div className="flex flex-col items-center justify-center gap-3">
            <ul className="flex gap-3 items-center justify-center">
                <li className="hover:scale-110 transition-transform duration-300"><a href="mailto:rka147@sfu.ca"><Mail color="#17aa41"></Mail></a></li>
                <li className="hover:scale-110 transition-transform duration-300"><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin color="#0077b5"></Linkedin></a></li>
                <li className="hover:scale-110 transition-transform duration-300"><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter color="#1da1f2"></Twitter></a></li>
                <li className="hover:scale-110 transition-transform duration-300"><a href="https://github.com" target="_blank" rel="noopener noreferrer"><Github /></a></li>
                <li className="hover:scale-110 transition-transform duration-300"><a href="https://instagram.com/leok_can" target="_blank" rel="noopener noreferrer"><Instagram color="#e1306c"></Instagram></a></li>
            </ul>
            </div>
        </div>

    );  
}
