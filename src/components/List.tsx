
export const products = [
    {
      "description": "Payments app with features to add money and perform peer-to-peer (P2P) payments through wallet",
      "target": "https://payments.crackedxdev.store",
      "project": "Payment-App",
      "thumb": "payments.webp",
      "tech1": "Nextjs",
      "tech2": "typescript",
      "tech3": "tailwindcss",
      "tech4": "Nodejs",
      "tech5": "Postgres"
    },
    {
      "description": "Blogging platform, featuring user authentication (signup/login) & user-friendly interface.",
      "target": "https://blog.crackedxdev.store/",
      "project": "Blog-Me",
      "thumb": "Blog.webp",
      "tech1": "React",
      "tech2": "typescript",
      "tech3": "tailwindcss",
      "tech4": "Prisma",
      "tech5": "Nodejs"
    },
    {
      "description": "YT-clone is a video-sharing platform where users can watch, like, comment, and share videos",
      "target": "https://video.crackedxdev.store/",
      "project": "Youtube Clone frontend",
      "thumb": "ytclone.webp",
      "tech1": "Nextjs",
      "tech2": "typescript",
      "tech3": "tailwindcss",
      "tech4": "Nodejs",
      "tech5": "Vercel"
    },
    {
      "description": "A content based recommendation system using\n NLP Models (Bag of words and TF-IDF)",
      "target": "https://github.com/csshankar/Ai_Mafia/blob/main/recommendation.ipynb",
      "project": "Apparel Product Recommendation Engine",
      "thumb": "recommendation.webp",
      "tech1": "Python",
      "tech2": "Bow",
      "tech3": "TF-IDF",
      "tech4": "Word2Vec",
      "tech5": "NLP"
    },
    {
      "description": "Applied KNN classification algorithm in face recognition using opencv and HaarCascades",
      "target": "https://github.com/csshankar/Ai_Mafia/blob/main/face_recognition.py",
      "project": "Face Recognition System",
      "thumb": "face.webp",
      "tech1": "Python",
      "tech2": "opencv",
      "tech3": "HaarCascades",
      "tech4": "KNN",
      "tech5": "CNN"
    }

]

export interface Product {
    description: string;
    target: string;
    project: string;
    thumb: string;
    tech1: string;
    tech2: string;
    tech3: string;
    tech4: string;
    tech5: string;
  }

export const List: React.FC<Product> = (props) => {
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

export default List;