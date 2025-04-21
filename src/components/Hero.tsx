export const Hero = () => {

    return (
        <div >
            <div className="md:w-full mt-10"> 
            <p className="text-3xl sm:text-5xl font-bold animate1 text-white">Kumar Shankar</p>
            <p className="text-zinc-400 mb-6 md:text-lg text-sm mt-4 font-medium">Full stack dev. Loves building Products.
             Love to talk about tech, startups. Open for collaboration or new opportunities.</p>
            </div>
            <p className="text-white font-semibold"><span className="text-zinc-400 font-medium">Tech Stack:</span> React, Nextjs, Vite, Typescript, JavaScript, Nodejs, Tailwindcss, Prisma, Express</p>
            <div className="flex items-center gap-2">
                <button>
                
                <a href="Kumar_Resume_24012025.pdf" download=""   className="bg-gray-900 px-4 sm:h-11 h-10 mt-8 rounded-xl flex items-center justify-center md:text-base text-sm text-white border-2 border-sky-500 hover:bg-gray-700  transition duration-500" type="submit">  Resume   </a>
                </button>
                <button >
                <a href="https://cal.com/kumar-shankar" target="_blank" rel="noreferrer noopener" className="bg-gray-900 px-4 sm:h-11 h-10 mt-8 rounded-xl flex items-center justify-center md:text-base text-sm border-2 border-sky-500 text-white hover:bg-gray-700 transition duration-500" type="submit">Schedule Call</a>
                </button>
                <button> <a href="https://wa.me/917384428903?text=I want to work on a project with you" className=" bg-green-400 px-4 sm:h-11 h-10 mt-8 rounded-xl flex items-center justify-center md:text-base text-sm text-white border-2 border-green-500 hover:bg-green-900 transition duration-500" type="submit">Chat on WhatsApp</a></button>
                </div>
        </div>

    )

}