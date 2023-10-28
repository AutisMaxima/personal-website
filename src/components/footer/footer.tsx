import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github } from "react-bootstrap-icons";
const Footer = () => {
    return (
        // <footer className="footer footer-center p-10 bg-neutral-900">
        //     <div>
        //         <span className="footer-title text-slate-200">Made With</span>
        //         <nav className="grid grid-flow-col gap-8 md:gap-16">
        //             <a><Image src="/tailwindcss-logotype/tailwindcss-logotype-white.svg" alt="TailwindCSS" className="relative drop-shadow-[0_0_0.3rem_#ffffff70]" width={200} height={100} /></a>
        //             <a><Image src="/daisyui.svg" alt="DaisyUI" className="relative drop-shadow-[0_0_0.3rem_#ffffff70] invert" width={75} height={50} /></a>
        //             <a><Image src="/next.svg" alt="NextJS" className="relative drop-shadow-[0_0_0.3rem_#ffffff70] invert" width={75} height={50} /></a>
        //             <a><Image src="/framer-motion.svg" className="relative drop-shadow-[0_0_0.3rem_#ffffff70]" alt="Framer Motion" width={20} height={20} /></a>
        //         </nav>
        //         <aside className="items-center grid-flow-col">
        //             <p className="text-slate-200">Copyright © 2023 - All right reserved</p>
        //         </aside>
        //     </div>
        // </footer>
        <footer className="footer items-center p-4 bg-neutral text-neutral-content">
            <aside className="items-center grid-flow-col">
                <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                <p>Copyright © 2023 - All right reserved</p>
            </aside>
            <nav className="grid-flow-col place-items-center sm:place-self-center sm:justify-self-end">
                <Link href="https://www.linkedin.com/in/rafael-tauran-b68b7821b/"><Linkedin size={24} className="fill-current" /></Link>
                <Link href="https://github.com/AutisMaxima"><Github size={24} className="fill-current" /></Link>
            </nav>
        </footer>
    );
};

export default Footer;