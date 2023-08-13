import Image from "next/image";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-gradient-to-br from-stone-500 to-stone-700 dark:bg-gradient-to-br dark:from-stone-700 dark:to-stone-900 text-zinc-400">
            <div>
                <span className="footer-title">Made With</span>
                <div className="grid grid-flow-col gap-8 md:gap-16">
                    <a><Image src="/tailwindcss-logotype/tailwindcss-logotype-white.svg" alt="TailwindCSS" className="relative drop-shadow-[0_0_0.3rem_#ffffff70]" width={200} height={100} /></a>
                    <a><Image src="/daisyui.svg" alt="DaisyUI" className="relative drop-shadow-[0_0_0.3rem_#ffffff70] invert" width={100} height={50} /></a>
                    <a><Image src="/next.svg" alt="NextJS" className="relative drop-shadow-[0_0_0.3rem_#ffffff70] invert" width={100} height={50} /></a>
                    <a><Image src="/framer-motion.svg" className="relative drop-shadow-[0_0_0.3rem_#ffffff70]" alt="Framer Motion" width={25} height={25} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;