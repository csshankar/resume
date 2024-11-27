
export const List = (props:any) => {
    return (
        <div>
            <div >
                <div className="bg-white/5 rounded-xl p-4 flex items-center md:flex-row flex-col gap-4  border-2 border-gray-900">

                    <img src={props.thumb} alt="Project" className="rounded-xl md:w-56 w-full md:h-32 h-40 object-cover" />
                    <div>
                        <div className="flex justify-start">
                        <a href={props.target} target="_blank" className="text-white flex items-center gap-1">
                                
                            <p className="text-white font-semibold text-xl ">{props.project}</p>
                            </a>
                            <div className="flex ml-1 gap-2"><a href={props.target} target="_blank" aria-label="X" className="text-white flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                </svg></a>
                            </div>
                        </div>

                        <p className="text-zinc-400">{props.description}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                            <span className="bg-zinc-700 text-white px-2 py-1 rounded-lg text-xs">{props.tech1}</span>
                            <span className="bg-zinc-700 text-white px-2 py-1 rounded-lg text-xs">{props.tech2}</span>
                            <span className="bg-zinc-700 text-white px-2 py-1 rounded-lg text-xs">{props.tech3}</span>
                            <span className="bg-zinc-700 text-white px-2 py-1 rounded-lg text-xs">{props.tech4}</span>
                            <span className="bg-zinc-700 text-white px-2 py-1 rounded-lg text-xs">{props.tech5}</span>
                        </div>

                    </div>
                </div>

            </div>




        </div>
    )
}