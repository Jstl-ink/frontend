import {Page, PageApi} from "./sdk";
import {useEffect, useState} from "react";


export default function App() {
    const pageApi = new PageApi()
    const [page, setPage] = useState({} as Page);


    useEffect(() => {
        pageApi.getPageById({pageId: "Arrgh!"}).then(value => setPage(value))
    }, [])

    console.log(page.links)

    return (
        <main>
            <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
                <img
                    className="fit-picture"
                    src={page?.img}
                    alt="Grapefruit slice atop a pile of other slices" />
                <h1 className="text-3xl font-bold mb-6">{page?.name}</h1>

                <div className="w-full max-w-md">
                    {page?.links?.map((link, index) => (
                        <a
                            key={index}
                            href={link.link}
                            className="block w-full bg-white text-blue-600 text-center py-3 px-4 mb-3 rounded shadow hover:bg-blue-50 transition"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="flex space-x-4 mt-6">
                    {page?.socialLinks?.map((social, index) => (
                        <a
                            key={index}
                            href={social.link}
                            className="text-blue-600 hover:text-blue-800 transition"
                            aria-label={social.name}
                        >
                            {social.name}
                        </a>
                    ))}
                </div>
            </div>
        </main>
    )
}